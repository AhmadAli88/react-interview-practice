import React, { useMemo, useState, useCallback } from "react";

const CallbackExample = () => {
  const [first, setFirst] = useState(2);
  const [second, setSecond] = useState(2);
  const [ignoreCalc, setIgnoreCalc] = useState(0);

  function calcComplexValue(num1, num2) {
    console.log("🧮 Calculate complex values running....");
    let sum = 0;
    for (let i = 0; i <= 100000; i++) {
      sum = sum + i;
    }
    return num1 + num2;
  }

  // ✅ Memoize the expensive calculation
  const memoValue = useMemo(
    () => calcComplexValue(first, second),
    [first, second]
  );

  // ✅ useCallback to memoize handler functions
  const handleIncrementFirst = useCallback(() => {
    setFirst((prev) => prev + 1);
  }, []);

  const handleIncrementSecond = useCallback(() => {
    setSecond((prev) => prev + 1);
  }, []);

  const handleIgnoreCalc = useCallback(() => {
    setIgnoreCalc((prev) => prev + 1);
  }, []);

  console.log("Rendered! memoValue =", memoValue);

  return (
    <div>
      <h2>
        {first} + {second} = {memoValue}
      </h2>
      <div>
        <button onClick={handleIncrementFirst}>Increment First</button>
        <button onClick={handleIncrementSecond}>Increment Second</button>
        <button onClick={handleIgnoreCalc}>
          Ignore Expensive Calculation: {ignoreCalc}
        </button>
      </div>
    </div>
  );
};

export default CallbackExample;
