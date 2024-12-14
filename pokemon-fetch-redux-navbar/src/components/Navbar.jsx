import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {

    const toggleMenu = () => {
        const navMenu = document.querySelector(".nav-menu");
        const pokemonList = document.querySelector(".pokemon-list");
        const hamburger = document.querySelector(".hamburger");
        navMenu.classList.toggle('active')
        pokemonList.classList.toggle('active')
        hamburger.classList.toggle('active')
    }

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <NavLink to="/" className="nav-logo">Pokemons</NavLink>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
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
