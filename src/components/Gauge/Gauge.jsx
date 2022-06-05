import { useState, useRef, useEffect } from 'react';
import './Gauge.css';
import Pointer from './../Pointer/Pointer';

const Gauge = () => {
  const [pointerAngle, setPointerAngle] = useState(0);
  const gaugeRef = useRef(null);

  const updateAngle = (e) => {
    let rect = gaugeRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.width / 2;

    setPointerAngle(Math.atan2(x, -y));
  };

  return (
    <div id='Gauge' onMouseDown={updateAngle} ref={gaugeRef}>
      <Pointer angle={pointerAngle} />
    </div>
  );
};

export default Gauge;
