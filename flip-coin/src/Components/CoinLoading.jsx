import React, { useState, useEffect } from 'react';

const CoinLoading = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(prevRotation => prevRotation + 360);
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    return (
        // <div className="coin-loading-container">
            <div className="coin" style={{ transform: `rotateY(${rotation}deg)` }}>
                <div className="side head">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg" alt="Head" />
                </div>
                <div className="side tail">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg" alt="Tail" />
                </div>
            </div>
        // </div>
    );
};

export default CoinLoading;
