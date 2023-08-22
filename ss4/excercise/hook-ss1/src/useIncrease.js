import { useState } from "react";

const useIncrement = (x) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + x);
  };

  return [counter, increase];
};
export default useIncrement;
