import React from 'react';

function IngredientsList({ ingredientsListItems, ingredients, handelGetRecipeClick, recipeShown}) {
  return (<section>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" ari-live="polite">{ingredientsListItems}</ul>
    {ingredients.length > 2 && <div className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={handelGetRecipeClick}>Get a recipe</button>
    </div>}
  </section>)
}

export default IngredientsList;