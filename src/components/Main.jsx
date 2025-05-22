import React, { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';


function Main( ) {

  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Rice"]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(formData) {
    const ingredient = formData.get('ingredient')?.trim();
    if (!ingredient) return;
    if (ingredients.includes(ingredient)) {
      setError('This ingredient is already in the list');
      return;
    }
    setError(null);
    setIngredients(prevIngredients => [...prevIngredients, ingredient]);
  }

  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  async function handleGetRecipeClick() {
    try {
      setIsLoading(true);
      setError(null);
      const recipeResponse = await fetch("https://chipper-mermaid-ed5ef6.netlify.app/.netlify/functions/AI", {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ingredients})
      });
      
      if (!recipeResponse.ok) {
        throw new Error('Failed to fetch recipe');
      }
      
      const response = await recipeResponse.json();
      setRecipe(response.message);
      setRecipeShown(true);
    } catch (err) {
      setError('Failed to get recipe. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
        <button disabled={isLoading}>+ Add ingredient</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {ingredients.length > 0 && <IngredientsList 
        ingredientsListItems={ingredientsListItems} 
        ingredients={ingredients}
        handleGetRecipeClick={handleGetRecipeClick}
        recipeShown={recipeShown}
        isLoading={isLoading}
      />}
      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

export default Main;