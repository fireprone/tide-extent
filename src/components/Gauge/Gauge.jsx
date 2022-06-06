import { useRef, useEffect } from 'react';
import './Gauge.css';
import Pointer from './../Pointer/Pointer';
import Zone from '../Zone/Zone';

const Gauge = ({
  pointerAngle,
  setPointerAngle,
  targetAngle,
  setTargetAngle,
}) => {
  const gaugeRef = useRef(null);

  const updateAngle = (e) => {
    let rect = gaugeRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.width / 2;

    setPointerAngle(Math.atan2(x, -y));
  };

  const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    setTargetAngle(getRandomNumBetween(-1.6, 1.6));
  }, []);

  return (
    <div id='Gauge' onMouseDown={updateAngle} ref={gaugeRef}>
      <Pointer angle={pointerAngle} />
      <Zone angle={targetAngle + 0.1} color='yellow' size='medium' />
      <Zone angle={targetAngle - 0.1} color='yellow' size='medium' />
      <Zone angle={targetAngle} color='orange' size='small' />
    </div>
  );
};

export default Gauge;
