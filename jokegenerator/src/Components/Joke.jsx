import { useEffect } from 'react'
import Button from './Button'
import { useState } from 'react'

const Joke = () => {

    const [joke, setjoke] = useState('')

    const getJoke = async () => {
        const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single');
        const data = await response.json();

        setjoke(data.joke)
    }

    useEffect(() => {
        getJoke()
    }, [])

  return (
    <div>
        <Button callApi={getJoke}/>
        <p className='joke-area'>{joke}</p>
    </div>
  )
}

export default Joke
