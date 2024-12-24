import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {

    const mobileView = () => {
        const navMenu = document.querySelector(".nav-menu");
        const hamburger = document.querySelector(".hamburger");
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

    }

    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <NavLink className='nav-logo' to='/'>Pokemon</NavLink>
                    <ul className='nav-menu'>
                        <li className='nav-list'><NavLink className='nav-link' to="/">Home</NavLink></li>
                        <li className='nav-list'><NavLink className='nav-link' to="/about">About</NavLink></li>
                        <li className='nav-list'><NavLink className='nav-link' to="/services">Services</NavLink></li>
                        <li className='nav-list'><NavLink className='nav-link' to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="hamburger" onClick={() => mobileView()}>
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
