import React, { useState } from 'react'

const Games = () => {

    const [playerVal, setPlayerVal] = useState(null)
    const [computerVal, setComputerVal] = useState(null)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    const logic = (playerVal, computerVal) => {
        if (playerVal == computerVal) {
            return 0
        } else if (
            (playerVal == 'ROCK' && computerVal == 'SCISSORS') ||
            (playerVal == 'SCISSORS' && computerVal == 'PAPER') ||
            (playerVal == 'PAPER' && computerVal == 'ROCK')
        ) {
            return 1
        } else {
            return -1
        }

    }

    const decision = (playerChoice) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, computerChoice);

        setPlayerVal(playerChoice)
        setComputerVal(computerChoice)

        if (val === 1) {
            setPlayerScore(prevScore => prevScore + 1)
        } else if (val === -1) {
            setComputerScore(prevScore => prevScore + 1)
        } else {
            return ''
        }
    }

    return (
        <div className="container">
            <h1>Welcome to Rock, Paper, Scissors Game</h1>
            <div>
                <button onClick={() => decision("ROCK")}>
                    <i className="fas fa-hand-rock" /> Rock
                </button>
                <button onClick={() => decision("PAPER")}>
                    <i className="fas fa-hand-paper" /> Paper
                </button>
                <button onClick={() => decision("SCISSORS")}>
                    <i className="fas fa-hand-scissors" /> Scissors
                </button>
            </div>
            <div className="content">
                <p>Your choice: {playerVal}</p>
                <p>Computer's choice: {computerVal}</p>
                <h2>Your Score: {playerScore}</h2>
                <h2>Computer Score: {computerScore}</h2>
            </div>
        </div>
    )
}

export default Games
