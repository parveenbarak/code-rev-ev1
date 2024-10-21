import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="date-picker">
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
    </div>
  );
};

export default DatePickerComponent;
