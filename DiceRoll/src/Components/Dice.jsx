import React from 'react'
import './Dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dice = ({ face, rolling }) => {
    return (
        <div className="dice-container">
            <FontAwesomeIcon
                icon={['fas', `fa-dice-${face}`]}
                className={`Die ${rolling ? 'Die-rolling' : ''}`}
            />
        </div>
    )
}

export default Dice
