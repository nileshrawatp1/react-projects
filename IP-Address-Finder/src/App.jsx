import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Map from './Map'

function App() {
    const [ipDetails, setIpDetails] = useState([])
    const [lati, setLati] = useState(28.48)
    const [longi, setLongi] = useState(77.17)

    useEffect(() => {
        Axios.get('https://ipapi.co/json/').then((response) => {
            setIpDetails(response.data)
            setLati(response.data.latitude)
            setLongi(response.data.longitude)
        })
    }, [])

    return (
        <>
            <h1 className="heading">Ip Address Finder</h1>
            <div className="App">
                <div className="left-container">
                    <h4>What is my IPv4 address?</h4>
                    <h1 id="ip">{ipDetails.ip}</h1>
                    <h4>Approximate location: </h4>

                    <p>{ipDetails.city}, {ipDetails.region},
                        {ipDetails.country_name}.</p>


                    <h4>Internet Service Provider(ISP):</h4>

                    <p>{ipDetails.org}</p>
                </div>
                <Map lati={lati} longi={longi} />
            </div>
        </>
    )
}

export default App
