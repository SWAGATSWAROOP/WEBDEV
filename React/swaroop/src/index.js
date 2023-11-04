import React from "react";
import ReactDOM from "react-dom";
import Swagat from "./components/swagat";

function Main(){
  return(
    <div>
      <Swagat />
      <h3>Aryan Swaroop Parida</h3>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
