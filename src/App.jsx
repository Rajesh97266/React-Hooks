import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // useEffect with no dependencies, it runs on mount and unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty array ensures it runs only once after the first render

  return (
    <div>
      <h1>Timer: {count}s</h1>
    </div>
  );
}

export default Timer;
