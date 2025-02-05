import Axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [lyrics, setLyrics] = useState('')

    const searchLyrics = () => {
        Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(res => setLyrics(res.data.lyrics))
            .catch(e => setLyrics(`Lyrics not Found: ${e}`))
    }

    return (
        <div className='App'>
            <h1 className="app-header">
                Lyrics Finder ????
            </h1>
            <div className="input-container">
                <input type="text" onChange={e => setSong(e.target.value)} id="song-name" placeholder="Song Name" />
                <input type="text" onChange={e => setArtist(e.target.value)} id="artist-name" placeholder="Artist Name" />
                <button className='search-btn' onClick={searchLyrics}>Find Lyrics</button>
            </div>
            <hr />
            <pre>{lyrics}</pre>
        </div>
    )
}

export default App
