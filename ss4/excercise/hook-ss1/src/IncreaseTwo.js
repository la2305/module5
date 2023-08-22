import React from "react";
import useIncrement from "./useIncrease";

const IncreaseTwo = () => {
  const [counter, setCounter] = useIncrement(2);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={setCounter}>IncreaseTwo</button>
    </div>
  );
};
export default IncreaseTwo;
