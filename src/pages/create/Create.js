import React from 'react'
import { useState, useRef } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'




export default function Create() {

  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [method, setMethod] = useState('')

  const [newIngredients, setNewIngredients] = useState('')

  const [ingredients, setIngredients] = useState([])

  const ingredientInput = useRef(null)

  const { postData } = useFetch('http://localhost:3000/recipes', 'POST')

  const handelSubmit = (e) => {


    postData({ title, ingredients, method, cookingTime: cookingTime + 'minutes' })

  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredients.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(pervIngredients => [...pervIngredients, ing])
    }
    setNewIngredients('')

    ingredientInput.current.focus()

  }




  return (


    <div className='create'>
      <h2 className='page-title'>New Recipe</h2>

      <form onSubmit={handelSubmit}>


        <label>
          <span>Recipe Title</span>
          <input onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            required />
        </label>

        <label>
          <span>Ingredients</span>
          <div className='ingredients'>
            <input onChange={(e) => {
              setNewIngredients(e.target.value)
            }}
              value={newIngredients}
              type="text"
              ref={ingredientInput}

            />
            <button onClick={handleAdd} className='btn'>Add</button>
          </div>
        </label>


        <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>



        <label>
          <span>Recipe Method</span>
          <input onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
            type="text" />
        </label>


        <label>
          <span>Time to cook</span>
          <input onChange={(e) => { setCookingTime(e.target.value) }}
            value={cookingTime}
            type="number"
            required />
        </label>
        <button>Submit </button>

      </form>
    </div>
  )
}
