import { useState } from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import RollDice from './Components/RollDice'

function App() {

    return (
        <>
            <RollDice />
        </>
    )
}

export default App
