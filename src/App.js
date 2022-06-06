import { useState } from 'react';
import './App.css';
import Gauge from './components/Gauge/Gauge';

function App() {
  const [points, setPoints] = useState(0);
  const [pointerAngle, setPointerAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);

  const incrementPoints = (amount) => setPoints(points + amount);

  const withinRange = (distance) =>
    pointerAngle > targetAngle - distance &&
    pointerAngle < targetAngle + distance;

  const verifyGuess = () => {
    if (withinRange(0.1)) {
      incrementPoints(2);
    } else if (withinRange(0.275)) {
      incrementPoints(1);
    }
  };

  console.log(points);

  return (
    <div className='App'>
      <Gauge
        pointerAngle={pointerAngle}
        setPointerAngle={setPointerAngle}
        targetAngle={targetAngle}
        setTargetAngle={setTargetAngle}
      />
      <button onClick={verifyGuess}>Submit guess</button>
    </div>
  );
}

export default App;
