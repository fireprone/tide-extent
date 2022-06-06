import './Scoreboard.css';

const Scoreboard = ({ score, color, align }) => {
  const styleAlignment = align === 'right' ? { right: 0 } : { left: 0 };

  return (
    <div
      className={'Scoreboard'}
      style={{ ...styleAlignment, backgroundColor: color }}
    >
      {score}
    </div>
  );
};

export default Scoreboard;
