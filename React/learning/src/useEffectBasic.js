import { useEffect, useState } from "react";
const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  //use effect start when rendering.
  useEffect(() => {
    // console.log("Swagat Hello");
    // document.title = `New Message (${value})`;

    //based on certain condition use effect will work
    if (value >= 3) {
      console.log("Swagat Hello");
      document.title = `New Message (${value})`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <br />
      <button onClick={() => setValue(value - 1)}>Decrease</button>
      <br />
      <button onClick={() => setValue(0)}>Reset</button>
    </>
  );
};

export default UseEffectBasic;
