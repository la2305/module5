import { useState } from "react";

const useIncrement = () => {
  const [counter, setCounter] = useState(0);

  const increase = (x) => {
    const newCounter = counter + x;
    setCounter(newCounter);
  };

  return [counter, increase];
};
export default useIncrement;
