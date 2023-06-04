import React, { useState } from "react";
import { GradingOption } from "../../types/Dropdown";
import "./index.scss";

type DropdownProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdownOptions: GradingOption[];
  defaultValue: number;
  dropdownName: string;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  dropdownOptions,
  defaultValue,
  dropdownName,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(defaultValue);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
    onChange(event);
  };

  return (
    <select
      onChange={handleSelectChange}
      value={selectedValue}
      className={className}
      name={dropdownName}
    >
      {dropdownOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.content}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
