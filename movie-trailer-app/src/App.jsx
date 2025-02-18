import React, { useState } from 'react'
import './App.css'
import ReactPlayer from 'react-player';
import movieTrailer from "movie-trailer";

function App() {
    const [video, setvideo] = useState('inception');
    const [videoUrlId, setVideoUrlId] = useState(['YoHD9XEInc0'])

    const searchResult = () => {
        movieTrailer(video, {id: true, multi: true}).then((res) => {
            console.log(res)
            setVideoUrlId(res)})
    }

  return (
    <>
    <div className="App">
        <div className="search-box">
            <label htmlFor="search-input">
            Search for any movies/shows:{" "}
            </label>
            <input type="text" name="search-input" onChange={e => setvideo(e.target.value)}/>
            <button onClick={searchResult}>Search</button>
        </div>

        {
            videoUrlId.map((url) => (
                <ReactPlayer className="player" key={url} url={`https://youtu.be/${url}`} controls={true} />
            ))
        }

    </div>

    </>
  )
}

export default App
