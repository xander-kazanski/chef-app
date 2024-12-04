import React from 'react';

function ClaudeRecipe({recipe}) {
  console.log(recipe)
  const recipeString = recipe.split("\n")
  recipeString.unshift()
  const HTMLRecipe = recipeString.join('')
  return (<section className="recipe">
    <div dangerouslySetInnerHTML={{__html: HTMLRecipe}}></div>
  </section>)
}

export default ClaudeRecipe;