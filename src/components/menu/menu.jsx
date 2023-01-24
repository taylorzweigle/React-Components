//Taylor Zweigle, 2023
import React from "react";

import MenuHeader from "./menuHeader";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Menu = ({ children, isVisible, onMenuHeaderClick }) => {
  return (
    <div
      className="menu"
      style={{ display: `${isVisible ? "block" : "none"}` }}
    >
      <MenuHeader
        title={"Year"}
        icon={<ArrowDropUpIcon />}
        onMenuHeaderClick={onMenuHeaderClick}
      />
      {children}
    </div>
  );
};

export default Menu;
