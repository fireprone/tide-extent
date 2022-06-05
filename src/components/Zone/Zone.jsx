import './Zone.css';

const Zone = ({ angle }) => {
  return (
    <div id='Zone'>
      <div style={{ transform: `rotate(${angle}rad)` }}></div>
    </div>
  );
};

export default Zone;
