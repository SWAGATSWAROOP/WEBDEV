import React,{useState} from "react";

//More Dynamic
//use is use to call hooks
//return array ([value,function])
//mandate to use hooks inside function/component
//Component must be in UpperCase

const UseStateBasic = () => {
    //default rendering 
    //use state hook
  const [text, setText] = useState("react is best");
  const changeRes = () => {
    setText("React is very easy to play around the code");
  };
  return (
    <>
      <h2>{text}</h2>
      <button onClick={changeRes}>Change</button>
    </>
  );
};

export default UseStateBasic;
