import React from "react";
import TimezoneSlider from "./TimezoneSlider";

const TimezoneCard = ({ timezone, removeTimezone, selectedDate }) => {
  return (
    <div className="timezone-card">
      <button onClick={() => removeTimezone(timezone.id)}>X</button>
      <TimezoneSlider timezone={timezone} selectedDate={selectedDate} />
    </div>
  );
};

export default TimezoneCard;
