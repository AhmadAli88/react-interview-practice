import React, { useMemo, useState } from "react";

const MemoExample = () => {
  //2 + 2 = 4
  const [first, setFirst] = useState(2);
  const [second, setSecond] = useState(2);
  const [ignoreCalc, setIgnoreCalc] = useState(0);

  function calcComplexValue(num1, num2) {
    console.log("Calculate complex values running....");
    let sum = 0;
    for (let i = 0; i <= 100000; i++) {
      sum = sum + i;
    }
    return num1 + num2;
  }

  const memoValue = useMemo(
    () => calcComplexValue(first, second),
    [first, second]
  );
  console.log("memoValue", memoValue);
  return (
    <div>
      {first} + {second} = {memoValue}
      <div>
        <button onClick={() => setFirst((pre) => pre + 1)}>
          Increment First
        </button>
        <button onClick={() => setSecond((pre) => pre + 1)}>
          Increment Second
        </button>
        <button onClick={() => setIgnoreCalc((pre) => pre + 1)}>
          Ignore Expensive calculation: {ignoreCalc}
        </button>
      </div>
    </div>
  );
};

export default MemoExample;
