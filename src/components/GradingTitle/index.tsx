import React from "react";
import "./index.scss";

const GradingTitle: React.FC = () => {
  return (
    <div className="title-container">
      <div className="title-container__column">
        <h3>Aspek penilaian 1</h3>
      </div>
      <div className="title-container__column">
        <h3>Aspek penilaian 2</h3>
      </div>
      <div className="title-container__column">
        <h3>Aspek penilaian 3</h3>
      </div>
      <div className="title-container__column">
        <h3>Aspek penilaian 4</h3>
      </div>
    </div>
  );
};

export default GradingTitle;
