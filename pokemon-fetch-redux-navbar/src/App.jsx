import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
