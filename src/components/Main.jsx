import React from 'react';
import "./main.css"

function Main(props) {
  return (
    <main>
      <form className="add-ingredient-form">
        <input 
          aria-label="Add ingredient" 
          placeholder="e.g. oregano"
          type="text"
        />
        <button>+ Add ingredient</button>
      </form>
    </main>
  )
}

export default Main;