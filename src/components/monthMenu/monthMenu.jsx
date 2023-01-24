//Taylor Zweigle, 2023
import React, { useState } from "react";

import Chip from "../chip/chip";
import Menu from "../menu/menu";

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
    <Menu isVisible={isVisible} onMenuHeaderClick={onMonthMenuClick}>
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
    </Menu>
  );
};

export default MonthMenu;
