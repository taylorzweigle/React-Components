//Taylor Zweigle, 2023
import React, { useState } from "react";

import Chip from "../chip/chip";
import Menu from "../menu/menu";

const YearMenu = ({ isVisible, onYearMenuClick, onChipSelect }) => {
  let [years, setYears] = useState([
    [
      { year: "2021", selected: false },
      { year: "2022", selected: false },
      { year: "2023", selected: true },
    ],
    [
      { year: "2024", selected: false },
      { year: "2025", selected: false },
      { year: "2026", selected: false },
    ],
    [
      { year: "2027", selected: false },
      { year: "2028", selected: false },
      { year: "2029", selected: false },
    ],
    [
      { year: "2030", selected: false },
      { year: "2031", selected: false },
      { year: "2032", selected: false },
    ],
  ]);

  const handleSelection = (selectedYear) => {
    onChipSelect(selectedYear);
    selectChip(selectedYear);
  };

  const selectChip = (selectedYear) => {
    let _years = years;

    for (let i = 0; i < _years.length; i++) {
      _years[i].map((year) => (year.selected = false));

      if (_years[i].find((object) => object.year === selectedYear)) {
        _years[i].find(
          (object) => object.year === selectedYear
        ).selected = true;
      }
    }

    setYears((_years) => [..._years]);
  };

  return (
    <Menu isVisible={isVisible} onMenuHeaderClick={onYearMenuClick}>
      {years.map((row) => (
        <div className="menuRow">
          {row.map((year) => (
            <Chip
              key={year.year}
              value={year.year}
              selected={year.selected}
              onChipClick={() => handleSelection(year.year)}
            />
          ))}
        </div>
      ))}
    </Menu>
  );
};

export default YearMenu;
