import { useState } from "react";
import { data } from "./data";

const Propdrilling = () => {
  const [people, setPeople] = useState(data);

  const remove = (id) => {
    return setPeople(() => people.filter((person) => person.id !== id));
  };

  return (
    <>
      <h1>PropDrilling</h1>
      <List people={people} remove={remove} />
    </>
  );
};

const List = ({ people, remove }) => {
  return (
    <>
      {people.map((person) => (
        <Item key={person.id} person={person} remove={remove} />
      ))}
    </>
  );
};

const Item = ({ person, remove }) => {
  return (
    <>
      <h3>
        {person.name} {person.course}
      </h3>

      <button onClick={() => remove(person.id)}>Remove</button>
    </>
  );
};

export default Propdrilling;
