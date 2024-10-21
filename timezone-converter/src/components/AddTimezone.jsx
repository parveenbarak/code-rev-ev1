import React, { useState } from "react";

const AddTimezone = ({ addTimezone }) => {
  const [newTimezone, setNewTimezone] = useState("");

  const handleSubmit = () => {
    if (newTimezone) {
      addTimezone({ id: Date.now(), name: newTimezone, offset: 0 }); 
      setNewTimezone("");
    }
  };

  return (
    <div className="add-timezone">
      <input
        type="text"
        value={newTimezone}
        onChange={(e) => setNewTimezone(e.target.value)}
        placeholder="Add Time Zone, City or Town"
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};

export default AddTimezone;
