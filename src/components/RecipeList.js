import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'
export default function RecipeList({ recipes }) {

    if (recipes.length === 0) {
        return <div className='error'> No recipes to load</div>
    }
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className="card">
                    <h1> {recipe.title}</h1>
                    <p>{recipe.cookingTime} to cook</p>
                    <p>{recipe.method.substring(0, 100)}</p>
                    <Link className='btn' to={`/recipes/${recipe.id}`}>Cook this</Link>
                </div>
            )
            )}


        </div>
    )
}
