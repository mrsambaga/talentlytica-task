import React, { useState } from "react";
import "./MainPage.scss";
import GradingContainer from "../components/GradingContainer";
import GradingTitle from "../components/GradingTitle";
import { Output } from "../types/Output";
import Button from "../components/Button";
import { StudentName } from "../constant/Student";

const MainPage: React.FC = () => {
  const [gradingOutput, setGradingOutput] = useState<Output>({} as Output);
  const gradingChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    studentName: string
  ) => {
    const { value, name } = event.target;
    const gradingName = name as keyof Output;
    setGradingOutput((prevOutput) => ({
      ...(prevOutput as Output),
      [gradingName]: {
        ...(prevOutput as Output)[gradingName],
        [studentName]: parseInt(value),
      },
    }));
  };

  const simpanBtnClickhandler = () => {
    const outputJSON = JSON.stringify(gradingOutput, null, 2);
    console.log(outputJSON);
  };

  return (
    <div className="main">
      <div className="main__title">
        <h1>Aplikasi Penilaian Mahasiswa</h1>
      </div>
      <div className="main__grading-section">
        <GradingTitle />
        {StudentName.map((student) => (
          <GradingContainer
            key={student}
            name={student}
            onChange={gradingChangeHandler}
          />
        ))}
      </div>
      <div className="main__button">
        <Button
          label="Simpan"
          onClickHandler={simpanBtnClickhandler}
          className="simpan-btn"
        />
      </div>
    </div>
  );
};

export default MainPage;
