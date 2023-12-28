import { useRef,useEffect } from "react";

const UseRefBAsics = () => {
  const refContainer = useRef(null);
  const ref = useRef(null);

  const handle = (event) => {
    event.preventDefault();
    alert(refContainer.current.value);
    console.log(ref.current);
  };

  //Only one time render.
  useEffect(()=>{
    console.log(refContainer.current.value);
  })

  return (
    <>
      <div>
        <form onSubmit={handle}>
          <label htmlFor="Email">Email: </label>
          <input ref={refContainer} />
          <button type="submit">Submit</button>
        </form>
        <div ref={ref}>Hello</div>
      </div>
    </>
  );
};

export default UseRefBAsics;
