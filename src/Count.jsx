import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const sum = count + 1;
    setCount(sum);
  };

  const handleReduce = () => {
    const reduce = count - 1;
    if (count > 0) {
      setCount(reduce);
    }
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Add To Count</button>
      <button onClick={handleReduce}>Reduce Button</button>
    </div>
  );
}
