import React, { useContext, useState } from "react";
import { data } from "./data";

const FamilyContext = React.createContext();

function App() {
  const [people, setPeople] = useState(data);
  const remove = (id) =>
    setPeople(() => people.filter((person) => person.id !== id));
  return (
    <>
      <FamilyContext.Provider value={{ remove }}>
        <div className="w-full flex flex-col justify-center mt-6">
          <h1 className="font-sans font-bold">Family Hierarchy</h1>
          <List people={people} />
        </div>
      </FamilyContext.Provider>
    </>
  );
}

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <Person person={person} />
      ))}
    </>
  );
};

const Person = ({ person }) => {
  const { remove } = useContext(FamilyContext);
  return (
    <>
      <div className="flex flex-row space-x-6">
        <h3>{person.name}</h3>
        <button className="outline-dotted" onClick={() => remove(person.id)}>
          RemovePerson
        </button>
      </div>
    </>
  );
};

export default App;
