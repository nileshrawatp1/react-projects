import React from 'react'
import CardName from './CardName'
import './Styles/ResultContainer.css'

const ResultContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map((suggestedName, i) => (
        <CardName key={`${suggestedName}-${i}`} suggestedName={suggestedName} />
    ))

    return (
        <div className='result-container'>
            {suggestedNamesJsx}
        </div>
    )
}

export default ResultContainer
