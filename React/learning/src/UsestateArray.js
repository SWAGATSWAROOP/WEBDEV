import { data } from "./data";
import { useState } from "react";

const Datarender = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h1>Using use state Array</h1>
      {people.map((person) => {
        const { id, ...ddata } = person;
        return (
          <div>
            <h3>{ddata.name}</h3>
            <h3>{ddata.course}</h3>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Remove</button>
      <button onClick={() => setPeople(data)}>Undo</button>
    </>
  );
};

export default Datarender;
