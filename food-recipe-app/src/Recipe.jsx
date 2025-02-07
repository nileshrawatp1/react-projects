import React from 'react'

const Recipe = (
    {
        recipeName,
        image,
        instructions,
        video,
        ingredients,
        measurements
    }
) => {

    return (
        <div className='recipe-card'>
            <h1 className="recipe-name">{recipeName}</h1>
            <h4 className='sub-headings'>Required Things - With Quantity</h4>
            <ol>
                {ingredients.map((ingredient, i) => (
                    <li key={ingredient}>{ingredient} - ({measurements[i]})</li>
                ))}
            </ol>
            <img src={image} className='image' alt={recipeName}/>

            <h4 className='sub-headings'>Steps to follow</h4>
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
