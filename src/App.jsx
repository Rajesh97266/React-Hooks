import React, { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Name changed: ${name}`); // Logs when 'name' state changes
  }, [name]); // Dependency array, effect runs when 'name' changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}

export default NameLogger;
