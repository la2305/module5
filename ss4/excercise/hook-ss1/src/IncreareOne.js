import React from "react";
import useIncrement from "./functionIncrease";

const IncreaseOne = () => {
  const [counter, setCounter] = useIncrement();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(1)}>InCreaseOne</button>
    </div>
  );
};
export default IncreaseOne;
