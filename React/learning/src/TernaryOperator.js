import { useState } from "react";
import UseEffectCleanUp from './useEffectCleanup';
import UseStateCounter from './UseStateCounter'

const TernaryOp = () => {
  const [present, setPresent] = useState(false);

  return (
    <>
      {/* {present ? (
        <div>
          <h5>Aryan</h5>
        </div>
      ) : (
        <div>
          <h1>Swagat</h1>
        </div>
      )} */}
      {present ? <UseEffectCleanUp/> : <UseStateCounter/>}
      <button onClick={() => setPresent(!present)}>Change</button>
    </>
  );
};

export default TernaryOp;
