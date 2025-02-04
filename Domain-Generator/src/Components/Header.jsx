import React from 'react'
import './Styles/Header.css'

const Header = ({ headerText, headerExpended }) => {
    return (
        <div className='head-container'>
            <div className="head-image head-image-expanded">Find Domain</div>
            <h1 className="head-text">{headerText}</h1>
        </div>
    )
}

export default Header
