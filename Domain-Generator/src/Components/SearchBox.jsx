import React from 'react'
import './Styles/SearchBox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className='search-container'>
            <input type="text"
                onChange={(e) => onInputChange(e.target.value)}
                placeholder='Enter Keyword' className='search-input' />
        </div>
    )
}

export default SearchBox
