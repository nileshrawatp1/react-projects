import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

    return (
        <>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    )
}

export default App
