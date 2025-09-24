import { useEffect, useState } from "react"
import "./App.css"
import { useGetRecipesMutation } from "./services/recipeApi"
import Card from "./components/Card"
import Spinner from "./components/Spinner"

export const App = () => {
  const [value, setValue] = useState("")
  const [query, setQuery] = useState("coffee")
  const [show, setShow] = useState(false)
  const [recipes, setRecipes] = useState({})

  const [getRecipes, { isLoading, data }] = useGetRecipesMutation()

  useEffect(() => {
    void (async () => {
      await getRecipes(query)
    })()
  }, [query, getRecipes])

  if (isLoading) {
    return <Spinner />
  }

  const handleSearch = () => {
    setQuery(value ? value : "coffee")
    setValue("")
  }

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
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="row-cols-1 row-cols-md-3 g-4">
        {data?.hits.map((item, index) => (
          <Card key={index} recipe={item.recipe} />
        ))}
      </div>
    </div>
  )
}
