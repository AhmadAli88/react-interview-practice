import React, { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
const [isDisabled, setIsDisabled] = useState(false);

  const handleIncrement = () => {
    debugger
    if(increment == 4){
      setIsDisabled(true);
        return null;
    }
     setIncrement(increment + 1);
  };
  const handleDecrement = () => {
    setDecrement(decrement - 1);
  };
  return (
    <div>
      Counter:
      <button onClick={handleIncrement} disabled={isDisabled}>Increment: {increment}</button>
      <button onClick={handleDecrement}>Decrement: {decrement}</button>
    </div>
  );
};

export default Counter;
