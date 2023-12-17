import React from "react";
import ReactDOM from "react-dom";
import PcGames from "./components/pcgames";

const Root = () => {
  return (
    <>
      <PcGames />
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
