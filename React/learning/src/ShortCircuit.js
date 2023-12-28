import React, { useState, useEffect } from "react";

const Shortcircuit = () => {
  const [text, setText] = useState("");
  //   useEffect(() => {
  //     if (!text) {
  //       alert("No value is present");
  //     }
  //   }, [text]);
  //First true value is printed in case OR
  const firstvalue = "Swagat" || text;
  //Always the last value is printed if all rest are true
  const secondvalue = "Aryan" && text;
  return (
    <>
      <div>
        {/* <h1>{firstvalue}</h1>
        <h2>Value : {secondvalue}</h2> */}
        <h1>{text || "Swagat"}</h1>
        <h3>{text && "Swagat"}</h3>
        <button onClick={() => setText("Aryan")}>Change</button>
      </div>
    </>
  );
};

export default Shortcircuit;
