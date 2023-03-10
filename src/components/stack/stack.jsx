//Taylor Zweigle, 2023
import React from "react";

import PropTypes from "prop-types";

const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  const stackStyle = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={stackStyle}>{children}</div>;
};

Stack.propTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.bool,
};

export default Stack;
