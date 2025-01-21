import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import CoinLoading from './CoinLoading';

const FlipCoin = () => {
    const [currentSide, setCurrentSide] = useState({ side: 'head', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg' });
    const [flipCount, setFlipCount] = useState(0);
    const [heads, setHeads] = useState(0);
    const [loading, setLoading] = useState(false);

    const coins = [
        { side: 'head', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg' },
        { side: 'tail', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg' },
    ];

    const choice = (arr) => {
        const newIndex = Math.floor(Math.random() * arr.length);
        return arr[newIndex];
    };

    const flipCoin = () => {
        setCurrentSide(null);
        setLoading(true);

        setTimeout(() => {
            const newChoice = choice(coins);
            setCurrentSide(newChoice);
            setHeads(prevHead => (newChoice.side === 'head' ? prevHead + 1 : prevHead));
            setLoading(false);
            setFlipCount(prevCount => prevCount + 1);
        }, 3000);
    };

    return (
        <div>
            <h2>Let's flip the coin</h2>
            {loading && <CoinLoading />}
            {currentSide && <Coin info={currentSide} />}
            <button type="button" onClick={flipCoin}>Flip Coin</button>
            <p>
                Out of {flipCount} flips, there have been {heads} heads and {flipCount - heads} tails
            </p>
        </div>
    );
};

export default FlipCoin;
