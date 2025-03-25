import { useState } from "react";

export default function Counter() {
  const  [count, setCount] = useState(0);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="card">
      <h2>Counter: {count} </h2>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
