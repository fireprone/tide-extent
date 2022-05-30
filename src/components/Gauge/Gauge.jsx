import './Gauge.css';
import Pointer from './../Pointer/Pointer';
import { useState, useRef } from 'react';

const Gauge = () => {
  const [angle, setAngle] = useState(0);
  const gaugeRef = useRef(null);

  const updateAngle = (e) => {
    let rect = gaugeRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.width / 2;

    setAngle(Math.atan2(y, x));
  };

  return (
    <div id='Gauge' onMouseDown={updateAngle} ref={gaugeRef}>
      <Pointer angle={angle} />
    </div>
  );
};

export default Gauge;
