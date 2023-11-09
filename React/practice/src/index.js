import React from "react";
import ReactDOM from "react-dom";
import Gun from "./components/ammunation";

const Main = () => {
  return (
    <>
      <h1>Top Guns</h1>
      <Gun />
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
