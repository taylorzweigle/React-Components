//Taylor Zweigle, 2023
import React from "react";

import IconButton from "../iconButton/iconButton";

const Select = ({ label, value, width, icon, onButtonSelect }) => {
  return (
    <div className="selectContainer" style={{ width: width }}>
      <div>
        <div className="selectLabel">{label}</div>
        <div className="selectValue">{`${value.month} ${value.year}`}</div>
      </div>
      <div>
        <IconButton icon={icon} onIconButtonClick={onButtonSelect} />
      </div>
    </div>
  );
};

export default Select;
