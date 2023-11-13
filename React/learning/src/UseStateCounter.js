import React from "react";

//One component and all the changes is done in this statement
const UseStateCounter = () =>{
    const[message,setMessage] = React.useState(0);
    return (
      <>
        <section>
          <h2>React Counter</h2>
          <h4>{message}</h4>
          <button
            onClick={() => {
              setMessage(message + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              setMessage(message - 1);
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              setMessage(0);
            }}
          >
            Reset
          </button>
        </section>
      </>
    );
}

export default UseStateCounter;