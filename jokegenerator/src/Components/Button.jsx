import React from 'react'

const Button = ({callApi}) => {
  return (
    <div>
        <button onClick={callApi}>Click to generate a new Joke</button>
    </div>
  )
}

export default Button
