//Taylor Zweigle, 2023
import React, { useState } from "react";

import MonthMenu from "../monthMenu/monthMenu";
import YearMenu from "../yearMenu/yearMenu";
import Select from "../select/select";
import { formatMonth } from "../../utility/formatMonth";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const MonthSelect = () => {
  let [value, setValue] = useState({
    month: "January",
    day: "1",
    year: "2023",
  });

  let [monthIsVisible, setMonthIsVisible] = useState(false);
  let [yearIsVisible, setYearIsVisible] = useState(false);
  let [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleMenuVisibility = () => {
    if (menuIsVisible) {
      displayMenu();
    } else {
      displayMenu("Year");
    }
  };

  const handleYearMenuSelect = () => {
    displayMenu("Month");
  };

  const handleMonthMenuSelect = () => {
    displayMenu("Year");
  };

  const handleYearChipSelect = (selectedYear) => {
    displayMenu("Month");

    setValue({ ...value, year: selectedYear });
  };

  const handleMonthChipSelect = (selectedMonth) => {
    displayMenu();

    setValue({ ...value, month: formatMonth(selectedMonth) });
  };

  const displayMenu = (menu) => {
    if (menu === "Year") {
      setYearIsVisible(true);
      setMonthIsVisible(false);
      setMenuIsVisible(true);
    } else if (menu === "Month") {
      setYearIsVisible(false);
      setMonthIsVisible(true);
      setMenuIsVisible(true);
    } else {
      setYearIsVisible(false);
      setMonthIsVisible(false);
      setMenuIsVisible(false);
    }
  };

  return (
    <>
      <Select
        label={"Month"}
        value={value}
        width={"256px"}
        icon={<CalendarTodayIcon />}
        onButtonSelect={handleMenuVisibility}
      />
      <MonthMenu
        isVisible={monthIsVisible}
        onMonthMenuClick={handleMonthMenuSelect}
        onChipSelect={(selectedMonth) => handleMonthChipSelect(selectedMonth)}
      />
      <YearMenu
        isVisible={yearIsVisible}
        onYearMenuClick={handleYearMenuSelect}
        onChipSelect={(selectedYear) => handleYearChipSelect(selectedYear)}
      />
    </>
  );
};

export default MonthSelect;
