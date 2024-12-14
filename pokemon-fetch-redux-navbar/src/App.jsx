import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
