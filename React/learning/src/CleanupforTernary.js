import { useState, useEffect } from "react";

const CleanupForT = () => {
  const [size, setSize] = useState(window.innerWidth);
  const check = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <>
      <div>
        <h1>Size of window is : {size}</h1>
      </div>
    </>
  );
};

export default CleanupForT;
