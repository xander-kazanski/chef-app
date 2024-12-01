import React, { useState } from 'react';
import "./main.css"

function Main(props) {
  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
  }

  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}

export default Main;