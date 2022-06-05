import './Zone.css';

const Zone = ({ angle, color, size }) => {
  return (
    <div className='Zone'>
      <div
        className={`zone-${size}`}
        style={{ backgroundColor: color, transform: `rotate(${angle}rad)` }}
      ></div>
    </div>
  );
};

export default Zone;
