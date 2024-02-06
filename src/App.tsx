import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    return setCount(count + 1);
  };
  const handleDecrement = () => {
    return setCount(count - 1);
  };
  const handleReset = () => {
    return setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={handleReset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
}

export default App;
