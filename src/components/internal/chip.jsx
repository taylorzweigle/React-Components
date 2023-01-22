import React from "react";

const Chip = ({ value, selected, onChipClick }) => {
  let backgroundColor = selected ? "#9c27b0" : "#ffffff";
  let textColor = selected ? "#ffffff" : "#000000";

  return (
    <div
      className="chip"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onChipClick}
    >
      {value}
    </div>
  );
};

export default Chip;
