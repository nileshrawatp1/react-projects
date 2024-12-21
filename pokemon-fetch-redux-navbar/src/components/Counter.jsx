import React, { useEffect, useState } from 'react'
import FetchPokemon from './FetchPokemon';

function Counter() {

    const [time, setTime] = useState(5)

    useEffect(() => {
        let initialTimeId;
        if (time > 0) {
            initialTimeId = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000);
        }
        return () => {
            clearInterval(initialTimeId);
        }
    }, [time])

    return (
        <>
            {time > 0 && <div className='timer-h1'>
                <h1>Timer:
                    <span> {time} </span>
                </h1>
            </div>}
            {time === 0 && <FetchPokemon />}
        </>
    )
}

export default Counter
