//Taylor Zweigle, 2023
import React from "react";

import PropTypes from "prop-types";

const Button = ({ children, color, onClick }) => {
  const style = {
    fontFamily: "Arial",
    display: "inline-block",
    padding: "8px 12px",
    lineHeight: "1",
    fontSize: "14px",
    backgroundColor: color,
    color: "#ffffff",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
