import React, { useState } from "react";

import Chip from "./internal/chip";
import MenuHeader from "./internal/menuHeader";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MonthMenu = ({ isVisible, onMonthMenuClick, onChipSelect }) => {
  let [months, setMonths] = useState([
    [
      { month: "Jan", selected: true },
      { month: "Feb", selected: false },
      { month: "Mar", selected: false },
    ],
    [
      { month: "Apr", selected: false },
      { month: "May", selected: false },
      { month: "Jun", selected: false },
    ],
    [
      { month: "Jul", selected: false },
      { month: "Aug", selected: false },
      { month: "Sep", selected: false },
    ],
    [
      { month: "Oct", selected: false },
      { month: "Nov", selected: false },
      { month: "Dec", selected: false },
    ],
  ]);

  const handleSelection = (selectedMonth) => {
    onChipSelect(selectedMonth);
    selectChip(selectedMonth);
  };

  const selectChip = (selectedMonth) => {
    let _months = months;

    for (let i = 0; i < _months.length; i++) {
      _months[i].map((month) => (month.selected = false));

      if (_months[i].find((object) => object.month === selectedMonth)) {
        _months[i].find(
          (object) => object.month === selectedMonth
        ).selected = true;
      }
    }

    setMonths((_months) => [..._months]);
  };

  return (
    <div
      className="menu"
      style={{ display: `${isVisible ? "block" : "none"}` }}
    >
      <MenuHeader
        title={"Month"}
        icon={<ArrowDropDownIcon />}
        onMenuHeaderClick={onMonthMenuClick}
      />
      {months.map((row) => (
        <div className="menuRow">
          {row.map((month) => (
            <Chip
              key={month.month}
              value={month.month}
              selected={month.selected}
              onChipClick={() => handleSelection(month.month)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MonthMenu;
