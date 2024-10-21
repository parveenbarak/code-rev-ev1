import React, { useState } from "react";

const TimezoneSlider = ({ timezone, selectedDate }) => {
  const [sliderValue, setSliderValue] = useState(selectedDate.getHours());

  const handleSliderChange = (e) => {
    const newTime = new Date(selectedDate);
    newTime.setHours(e.target.value);
    setSliderValue(e.target.value);
  };

  const convertTime = (offset) => {
    let utcTime = new Date(selectedDate.getTime() + offset * 3600000);
    return utcTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="timezone-slider">
      <h3>{timezone.name}</h3>
      <input
        type="range"
        min="0"
        max="23"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>{convertTime(timezone.offset)}</p>
    </div>
  );
};

export default TimezoneSlider;
