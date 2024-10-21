import React, { useState } from "react";
import { allTimezones } from "../helpers/timezoneUtils";  
const SearchBar = ({ addTimezone }) => {
  const [query, setQuery] = useState("");

  const handleAdd = () => {
    if (allTimezones.includes(query)) {
      addTimezone(query);
    } else {
      alert("Please select a valid timezone");
    }
    setQuery("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        list="timezones"
        placeholder="Add Time Zone, City or Town"
      />
      <button onClick={handleAdd}>+</button>
      <datalist id="timezones">
        {allTimezones.map((timezone, index) => (
          <option key={index} value={timezone} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
