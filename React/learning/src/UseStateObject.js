import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    age: 28,
    name: "Swagat",
    message: "BlockChain is future",
  });

  const changeMessage = () => {
    // Changing only the required field.
    setPerson({
      ...person,
      message: "But MERN Stack is also important",
    });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
