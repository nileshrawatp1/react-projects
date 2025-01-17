import React, { useState } from 'react';
import './RollDice.css';
import Die from './Dice';

function RollDice({ sides = ['one', 'two', 'three', 'four', 'five', 'six'] }) {
  // State variables
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    // Generate random dice faces
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];

    // Update dice faces after 1 second
    setTimeout(() => {
      setDie1(newDie1);
      setDie2(newDie2);
      setRolling(false);
    }, 1000);
  };

  const handleBtn = rolling ? 'RollDice-rolling' : '';

  return (
    <div className='RollDice'>
      <div className='RollDice-container'>
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button
        className={handleBtn}
        disabled={rolling}
        onClick={roll}>
        {rolling ? 'Rolling' : 'Roll Dice!'}
      </button>
    </div>
  );
}

export default RollDice;
