import React from 'react';

const Player = ({ name, setName, diceValue }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="player">
      <input type="text" value={name} onChange={handleChange} />
      <div className="dice">{diceValue}</div>
    </div>
  );
};

export default Player;