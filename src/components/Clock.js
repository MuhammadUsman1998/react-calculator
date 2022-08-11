import React, { useState } from "react";
import "./Clock.css";
function Clock() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [cTime, setCTime] = useState(time);
  const [cDate, setCDate] = useState(date);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
    setCDate(date);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <div className="Time">
        <h1>{cTime}</h1>
        <button className="timebtn" onClick={updateTime}>
          Get Time
        </button>
        <button className="bgcolor">Change Color</button>
      </div>
      <div className="Date">
        <h1>{cDate}</h1>
      </div>
      {/* <div className="bg">
        <button className="bgcolor">Change Color</button>
      </div> */}
    </>
  );
}

export default Clock;
