import React, { useEffect, useState } from 'react'
import FetchPokemon from './FetchPokemon'

function Counter() {
    const [time, setTime] = useState(3)

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        return () => {
            clearTimeout()
        }
    }, [time])

    return (
        <>
            {time === 0 ? <FetchPokemon /> : <h1 className='timer-h1'>Timer: {time}</h1>}
        </>
    )
}

export default Counter
