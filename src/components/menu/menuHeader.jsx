//Taylor Zweigle, 2023
import React from "react";

import IconButton from "../iconButton/iconButton";

const MenuHeader = ({ title, icon, onMenuHeaderClick }) => {
  return (
    <div className="menuHeaderContainer">
      <div className="menuHeaderTitle">{title}</div>
      <span>
        <IconButton icon={icon} mini onIconButtonClick={onMenuHeaderClick} />
      </span>
    </div>
  );
};

export default MenuHeader;
