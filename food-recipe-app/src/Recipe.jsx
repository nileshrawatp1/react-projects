import React from 'react'

const Recipe = (
    {
        recipeName,
        image,
        instructions,
        video,
        ingredients
    }
) => {

    return (
        <div className='recipe-card'>
            <h1 className="recipe-name">{recipeName}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ol>
            <img src={image} className='image' />
            <ol className='instructions'>{
                instructions.split('. ').map((step, i) => (
                    <li key={i}>{step}.</li>
                ))
            }</ol>
            <div className="video-link">
                <a target='_blank' href={video} >Video Reference</a>
            </div>
        </div>
    )
}

export default Recipe
