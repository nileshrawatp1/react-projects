import React from 'react'
import './Styles/CardName.css'

const domainUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';
const CardName = ({ suggestedName }) => {
    return (
        <a
            target='_blank'
            href={`${domainUrl}${suggestedName}`}
            rel='noreferrer'
            className='card-link'>
            <div className="result-card-name">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default CardName
