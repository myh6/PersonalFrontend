import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';
import HoveredButton from './HoveredButton';

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
      <div>
        <h1>Inventory Count: {count}</h1>
        <HoveredButton onClick={increaseCount} name={"+"} />
        <HoveredButton onClick={decreadeCount} disabled={count === 0} name={"-"} />
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
  );
}

export default App;
