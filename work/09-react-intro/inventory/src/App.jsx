import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreadeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReorder = () => {
    setCount(5);
  };

  return (
    <>
      <div>
        <h1>Inventory Count: {count}</h1>
        <div className="button-group">
          <button onClick={increaseCount}>+</button>
          <button onClick={decreadeCount} disabled={count === 0}>-</button>
          {count === 0 && <Reorder onReorder={handleReorder} />}
        </div>
      </div>
    </>
  );
}

export default App;
