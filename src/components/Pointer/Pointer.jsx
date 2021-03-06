import './Pointer.css';

const Pointer = ({ angle }) => {
  return (
    <div id='Pointer'>
      <div id='pole' style={{ transform: `rotate(${angle}rad)` }}></div>
      <div id='hinge'></div>
    </div>
  );
};

export default Pointer;
