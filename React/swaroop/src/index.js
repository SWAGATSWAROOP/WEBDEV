import React from "react";
import ReactDOM from "react-dom";
import Ps from "./components/ps";
import Satyam from "./components/image";
import './index.css';

function Main() {
  return (
    <div className="style">
      <Ps />
      <Satyam />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
