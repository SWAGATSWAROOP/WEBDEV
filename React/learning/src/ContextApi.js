import React, { useState, useContext } from "react";
import { data } from "./data.js";

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [d, setD] = useState(data);
  const remove = (id) => setD(() => d.filter((swag) => swag.id !== id));
  return (
    <>
      <PersonContext.Provider value={{ remove }}>
        <List person={d} />
      </PersonContext.Provider>
    </>
  );
};

const List = ({ person }) => {
  return (
    <>
      {person.map((sin) => (
        <Single value={sin} />
      ))}
    </>
  );
};

const Single = ({ value }) => {
  const { remove } = useContext(PersonContext);
  return (
    <>
      <h4>{value.name}</h4>
      <button onClick={() => remove(value.id)}>Remove</button>
    </>
  );
};

export default ContextAPI;
