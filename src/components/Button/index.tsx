import React from "react";
import "./index.scss";

type ButtonProps = {
  label: string;
  onClickHandler: () => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClickHandler,
  className,
}) => {
  return (
    <>
      <button onClick={onClickHandler} className={className}>
        {label}
      </button>
    </>
  );
};

export default Button;
