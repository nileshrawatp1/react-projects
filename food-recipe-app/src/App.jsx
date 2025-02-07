
import { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe';

function App() {
    const [query, setQuery] = useState('Soup');
    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState('Soup')
    const [error, setError] = useState(null)

    const getRecipe = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            if (response.ok) {
                const data = await response.json();
                if (data.meals) {
                    setRecipe(data.meals);
                    setError('')
                } else {
                    throw new Error("No Recipe Found");

                }
            } else {
                throw new Error("Failed to fetch API");
            }
        } catch (error) {
            setError(`Error: ${error}`)
        }
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }

    useEffect(() => {
        getRecipe();
    }, [query])

    const recipeJsx = recipe.map((meal, i) => (
        <Recipe
            key={`${meal.strMeal}-${i}`}
            recipeName={meal.strMeal}
            image={meal.strMealThumb}
            instructions={meal.strInstructions}
            video={meal.strYoutube}
            ingredients={Object.keys(meal)
                .filter(key => key.startsWith('strIngredient') && meal[key])
                .map(key => (meal[key]))
            }
            measurements={Object.keys(meal)
                .filter(key => key.startsWith('strMeasure') && meal[key])
                .map(key => meal[key])
            }
        />
    ))

    return (
        <div className='App'>
            <h1 className='title'>Welcome to Food Recipe App</h1>
            <form className='search-form' onSubmit={getSearch}>
                <input type="text" className='search-input' onChange={e => setSearch(e.target.value)} placeholder='Whats the Craving' />
                <button type="submit" className='search-btn'>Search</button>
            </form>
            {error && <p className='error-msg'>No Recipe Found</p>}
            <div className="recipes">
                {!error && recipeJsx}
            </div>
        </div>
    )
}

export default App
