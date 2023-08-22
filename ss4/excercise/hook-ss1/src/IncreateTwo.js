import React from "react";
import useIncrement from "./functionIncrease";

const IncreaseTwo = () => {
    const [counter,setCounter] = useIncrement();

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() =>setCounter(2)}>IncreaseTwo</button>
        </div>
    );
}
export default IncreaseTwo;


// import React from "react";
// import useIncrement from "./functionIncrease";

// const IncreaseOne = () => {
//   const [counter, setCounter] = useIncrement();

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(1)}>InCreaseOne</button>
//     </div>
//   );
// };
// export default IncreaseOne;