import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import DatePickerComponent from "./components/DatePickerComponent";
import TimezoneList from "./components/TimezoneList";
import ThemeToggle from "./components/ThemeToggle";
import { getOffsetFromTimezone } from "./helpers/timezoneUtils";

function App() {
  const [timezones, setTimezones] = useState([
    { id: 1, name: "UTC", offset: 0 },
    { id: 2, name: "IST", offset: 5.5 },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  const addTimezone = (timezone) => {
    const offset = getOffsetFromTimezone(timezone); 
    if (offset !== null) {
      setTimezones([...timezones, { id: Date.now(), name: timezone, offset }]);
    } else {
      alert("Invalid timezone selected");
    }
  };

  const removeTimezone = (id) => {
    setTimezones(timezones.filter((tz) => tz.id !== id));
  };

  const reverseTimezones = () => {
    setTimezones([...timezones].reverse());
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Timezone Converter</h1>
      <ThemeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SearchBar addTimezone={addTimezone} />
      <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <button onClick={reverseTimezones}>Reverse Timezones</button>
      <TimezoneList
        timezones={timezones}
        removeTimezone={removeTimezone}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default App;
