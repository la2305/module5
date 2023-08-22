import React from "react";
import useIncrement from "./useIncrease";

const IncreaseOne = () => {
  const [counter, setCounter] = useIncrement(1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={setCounter}>InCreaseOne</button>
    </div>
  );
};
export default IncreaseOne;
