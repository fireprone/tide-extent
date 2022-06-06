import { useState } from 'react';
import './App.css';
import Gauge from './components/Gauge/Gauge';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {
  const [pointerAngle, setPointerAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [pinkScore, setPinkScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [turn, setTurn] = useState('pink');
  let points, setPoints;

  if (turn === 'pink') {
    points = pinkScore;
    setPoints = setPinkScore;
  } else {
    points = blueScore;
    setPoints = setBlueScore;
  }

  const incrementPointsBy = (amount) => setPoints(points + amount);

  const withinRangeOf = (distance) =>
    pointerAngle > targetAngle - distance &&
    pointerAngle < targetAngle + distance;

  const verifyGuess = () => {
    if (!isHidden) {
      return;
    }

    setIsHidden(false);

    if (withinRangeOf(0.1)) {
      incrementPointsBy(2);
    } else if (withinRangeOf(0.275)) {
      incrementPointsBy(1);
    }
  };

  const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min;

  const generateTargetAngle = () => {
    setTargetAngle(getRandomNumBetween(-1.6, 1.6));
  };

  const endTurn = () => {
    setIsHidden(true);
    generateTargetAngle();
    setTurn(turn === 'pink' ? 'blue' : 'pink');
  };

  return (
    <div className='App'>
      <Scoreboard score={pinkScore} color={'lightpink'} align={'left'} />
      <Scoreboard score={blueScore} color={'lightblue'} align={'right'} />
      <Gauge
        pointerAngle={pointerAngle}
        setPointerAngle={setPointerAngle}
        targetAngle={targetAngle}
        isHidden={isHidden}
      />
      <button onClick={verifyGuess}>Submit guess</button>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Show' : 'Hide'} target
      </button>
      <button onClick={endTurn}>Next turn</button>
    </div>
  );
}

export default App;
