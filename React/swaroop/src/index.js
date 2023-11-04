import React from "react";
import ReactDOM from "react-dom";
import Ps from "./components/ps";
import Satyam from "./components/image";

function Main() {
  return (
    <div>
      <Ps />
      <Satyam />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
