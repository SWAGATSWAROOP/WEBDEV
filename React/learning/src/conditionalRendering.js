import { useState } from "react";

const ConditionalRendering = () => {
  const [value, setValue] = useState(false);
  //Multiple return statements and on the basis of condition page is rendered.
  if (value) {
    return (
      <>
        <h2>Returning 1...</h2>
        <button onClick={() => setValue(false)}>Change to false</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Returning 2...</h2>
        <button onClick={() => setValue(true)}>Change to true</button>
      </>
    );
  }
};

export default ConditionalRendering;
