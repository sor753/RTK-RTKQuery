import { useState } from "react"
import "./App.css"

export const App = () => {
  const [value, setValue] = useState("")
  const [query, setQuery] = useState("")
  const [show, setShow] = useState(false)
  const [recipes, setRecipes] = useState({})

  return (
    <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <nav>
        <h2>Food Recipe</h2>
      </nav>
      <div className="row g-1 align-items-center mt-2">
        <label htmlFor="recipe-search">Search Recipes</label>
        <input
          type="text"
          id="recipe-search"
          name="recipe-search"
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <div className="col-auto">
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}
