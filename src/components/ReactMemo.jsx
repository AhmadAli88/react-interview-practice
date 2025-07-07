import React, { useState } from "react";

const ChildReactMemo = React.memo(({first, second}) => {
    console.log("ExpensiveSum re-rendered")
    let sum=0;
    for( let i=0; i<=10000; i++){
        sum=sum + i;
    }
    return (
    <div>
      Sum of props: {first} + {second} = {first + second}
    </div>
  );
})

const ParentReactMemo = () => {
    const [first, setFirst]= useState(2)
    const [second, setSecond]= useState(2)
    const [render, setRender] = useState(0)
  return <div>
    <ChildReactMemo first={first} second={second}/>
    <button onClick={() => setFirst((pre)=> pre + 1)}>Increment</button>
     <button onClick={() => setSecond((pre)=> pre + 1)}>Decrement</button>
       <button onClick={() => setRender((pre)=> pre + 1)}>Rendering: {render}</button>
  </div>;
};

export default ParentReactMemo;
