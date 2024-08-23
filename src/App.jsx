import React, { useState } from 'react';
import './App.css';

// Görselleri import edin
import dice1 from './assets/dice/dice1.png';
import dice2 from './assets/dice/dice2.png';
import dice3 from './assets/dice/dice3.png';
import dice4 from './assets/dice/dice4.png';
import dice5 from './assets/dice/dice5.png';
import dice6 from './assets/dice/dice6.png';

const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [playerName, setPlayerName] = useState('Player 1');
  const [playerDice, setPlayerDice] = useState(1);
  const [pcDice, setPcDice] = useState(1);
  const [result, setResult] = useState('');
  const [rolling, setRolling] = useState(false);
  const [inputName, setInputName] = useState('');

  const rollDice = () => {
    setRolling(true);
    setResult('');

    const interval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6) + 1);
      setPcDice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      const newPlayerDice = Math.floor(Math.random() * 6) + 1;
      const newPcDice = Math.floor(Math.random() * 6) + 1;
      setPlayerDice(newPlayerDice);
      setPcDice(newPcDice);

      if (newPlayerDice > newPcDice) {
        setResult(`${playerName} Wins! 🏆`);
      } else if (newPcDice > newPlayerDice) {
        setResult('PC Wins! 🏆');
      } else {
        setResult('Draw! 🤝');
      }

      setRolling(false);
    }, 3000);
  };

  const handleNameChange = () => {
    if (inputName.trim() !== '') {
      setPlayerName(inputName);
    }
  };

  return (
    <div className="App">
      <h1>{result}</h1>
      <div className="dice-container">
        <div className="dice-wrapper">
          <img src={diceImages[playerDice]} alt={`${playerName}'s dice`} className="dice" />
          <div className="dice-label">{playerName}</div>
        </div>
        <div className="dice-wrapper">
          <img src={diceImages[pcDice]} alt="PC's dice" className="dice" />
          <div className="dice-label">PC</div>
        </div>
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
      <div className="name-change-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleNameChange}>
          Change Name
        </button>
      </div>
    </div>
  );
}

export default App;
