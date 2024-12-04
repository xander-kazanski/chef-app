import React, { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';


function Main( ) {

  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Rice"]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState(null);

  function handleSubmit(formData) {
    if (!formData.get('ingredient')) return
    setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
  }

  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  async function handelGetRecipeClick() {
    const recipeResponse = await getRecipeFromMistral(ingredients)
    setRecipe(recipeResponse)
    setRecipeShown(!recipeShown)
  }

  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList 
        ingredientsListItems={ingredientsListItems} 
        ingredients={ingredients}
        handelGetRecipeClick={handelGetRecipeClick}
        recipeShown={recipeShown}
      />}
      {recipeShown === true && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

export default Main;