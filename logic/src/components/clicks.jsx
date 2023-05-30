import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>    
        <div>
        <h2>Click Counter</h2>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Click Me</button>
        </div>
        <hr />
    </div>
  );
};

export default ClickCounter;
