import './App.css'
import Joke from './Components/Joke'

function App() {

    return (
        <>
            <div className="joke-div">
                <h1>Joke Generator using Joke API</h1>
                <Joke />
            </div>
        </>
    )
}

export default App
