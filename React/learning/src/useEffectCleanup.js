import { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [value, setValue] = useState(window.innerWidth);
  const reSize = () => {
    setValue(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", reSize);
    // As so many event listeners are running in the background we need to remove these as
    // it may lead to many complexity code cleanup
    // it should be a function that removes the event listener
    return () => window.removeEventListener("resize", reSize);
  });
  return (
    <>
      <h2>Screen Size</h2>
      <h2>{value} px</h2>
    </>
  );
};

export default UseEffectCleanUp;
