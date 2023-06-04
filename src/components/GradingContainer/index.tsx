import React from "react";
import Dropdown from "../Dropdown";
import { GradingDropdownOptions } from "../../types/Dropdown";
import "./index.scss";
import DefaultPhoto from "../../img/default_photo_profile.png";
import { ChangeStudentNameFormatToJSON } from "../../helper/StudentNameFormatter";

type GradingContainerProps = {
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    studentName: string
  ) => void;
};

const GradingContainer: React.FC<GradingContainerProps> = ({
  name,
  onChange,
}) => {
  const gradeDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const studentName = ChangeStudentNameFormatToJSON(name);
    onChange(event, studentName);
  };

  return (
    <div className="container">
      <div className="container__left">
        <img src={DefaultPhoto} alt="default-photo-profile" />
        <h3>{name}</h3>
      </div>
      <div className="container__right">
        <Dropdown
          onChange={gradeDropdownChange}
          dropdownOptions={GradingDropdownOptions}
          defaultValue={0}
          className="grading-dropdown"
          dropdownName="aspek_penilaian_1"
        />
        <Dropdown
          onChange={gradeDropdownChange}
          dropdownOptions={GradingDropdownOptions}
          defaultValue={0}
          className="grading-dropdown"
          dropdownName="aspek_penilaian_2"
        />
        <Dropdown
          onChange={gradeDropdownChange}
          dropdownOptions={GradingDropdownOptions}
          defaultValue={0}
          className="grading-dropdown"
          dropdownName="aspek_penilaian_3"
        />
        <Dropdown
          onChange={gradeDropdownChange}
          dropdownOptions={GradingDropdownOptions}
          defaultValue={0}
          className="grading-dropdown"
          dropdownName="aspek_penilaian_4"
        />
      </div>
    </div>
  );
};

export default GradingContainer;
