import { useState } from "react";
import { Data } from "./Data.js";
import Context from "./Context.js";

const Provider = (props) => {
  const [v, setV] = useState(Data);
  const remove = (id) => setV(() => v.filter((persons) => persons.id !== id));
  return (
    <Context.Provider
      value={{
        data: v,
        accepted: "Not Accepted",
        boolean: true,
        rem: remove,
      }}
    >
      <>
        <h1>Provider is showing</h1>
        {props.children}
      </>
    </Context.Provider>
  );
};

export default Provider;
