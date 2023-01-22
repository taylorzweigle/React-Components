import React from "react";

const IconButton = ({ icon, mini, onIconButtonClick }) => {
  let size = mini ? "24px" : "32px";

  return (
    <div
      className="iconButton"
      style={{ width: size, height: size }}
      onClick={onIconButtonClick}
    >
      <div className="iconButtonIcon">{icon}</div>
    </div>
  );
};

export default IconButton;
