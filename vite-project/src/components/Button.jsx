import React from 'react';

const Button = ({ rollDice }) => {
  return <button onClick={rollDice}> <i className="fas fa-random"></i></button>;
};

export default Button;