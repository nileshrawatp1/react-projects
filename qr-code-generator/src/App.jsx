import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [temp, setTemp] = useState('');
    const [word, setWord] = useState('https://nileshrawat.vercel.app');
    const [bgColor, setBgColor] = useState('ffffff');
    const [size, setSize] = useState(400);
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);

    const handleClick = () => {
        setWord(temp)
    }

    return (
        <div className='App'>
            <h1 className="heading">QR Code Generator</h1>
            <div className="input-box">
                <input type="text" onChange={e => setTemp(e.target.value)} placeholder='Enter Word to Encode' />
                <button onClick={handleClick} >Generate</button>
            </div>

            <div className="extra">
                <h5>Background Color: </h5>
                <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value.substring(1))} />
                <h5>Dimentions: </h5>
                <input type="range" min={200} max={600} value={size} onChange={e => setSize(e.target.value)} />
            </div>

            <div className="output-box">
                <img src={qrCode} alt="" />
                <a href={qrCode} download="QRCode">
                    <button type='button'>Download</button>
                </a>
            </div>

        </div>
    )
}

export default App
