import { useRef } from 'react';
import './Gauge.css';
import Pointer from './../Pointer/Pointer';
import Zone from '../Zone/Zone';

const Gauge = ({ pointerAngle, setPointerAngle, targetAngle, isHidden }) => {
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
      {!isHidden && (
        <>
          <Zone angle={targetAngle + 0.1} color='yellow' size='medium' />
          <Zone angle={targetAngle - 0.1} color='yellow' size='medium' />
          <Zone angle={targetAngle} color='orange' size='small' />
        </>
      )}
    </div>
  );
};

export default Gauge;
