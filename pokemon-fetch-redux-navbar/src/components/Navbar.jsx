import React from 'react'
import { NavLink } from 'react-router';
function Navbar() {

    const mobileView = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    }

    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <NavLink className='nav-logo' to="/">Pokemon</NavLink>
                    <ul className="nav-menu">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                    <div className="hamburger" onClick={(e) => mobileView()}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
