import { useEffect, useState } from "react"
import "./App.css"
import { useGetRecipesMutation } from "./services/recipeApi"
import Card from "./components/Card"
import Spinner from "./components/Spinner"
import { type Recipe } from "./types/recipe.type"
import Modal from "./components/Modal"

export type HealthValue =
  | "vegan"
  | "vegetarian"
  | "paleo"
  | "dairy-free"
  | "low-sugar"
  | "egg-free"
type HealthLabel =
  | "Vegan"
  | "Vegetarian"
  | "Paleo"
  | "Dairy Free"
  | "Low Sugar"
  | "Egg Free"

type Option = {
  label: HealthLabel
  value: HealthValue
}

const options: Option[] = [
  {
    label: "Vegan",
    value: "vegan",
  },
  {
    label: "Vegetarian",
    value: "vegetarian",
  },
  {
    label: "Paleo",
    value: "paleo",
  },
  {
    label: "Dairy Free",
    value: "dairy-free",
  },
  {
    label: "Low Sugar",
    value: "low-sugar",
  },
  {
    label: "Egg Free",
    value: "egg-free",
  },
]

export const App = () => {
  const [value, setValue] = useState("")
  const [query, setQuery] = useState("coffee")
  const [health, setHealth] = useState<HealthValue>("vegan")
  const [show, setShow] = useState(false)
  const [recipe, setRecipe] = useState<Recipe>({
    label: "",
    image: "",
    calories: 0,
  })

  const [getRecipes, { isLoading, data }] = useGetRecipesMutation()

  useEffect(() => {
    void (async () => {
      await getRecipes({ query, health })
    })()
  }, [query, health, getRecipes])

  if (isLoading) {
    return <Spinner />
  }

  const handleSearch = () => {
    setQuery(value ? value : "coffee")
    setValue("")
  }

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHealth(e.target.value as HealthValue)
  }

  const toggleShow = (recipe: Recipe): void => {
    setShow(!show)
    setRecipe(recipe)
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
        <div className="col-auto">
          <select
            name="category"
            onChange={handleClick}
            value={health}
            className="categoryDropdown"
          >
            {options.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row-cols-1 row-cols-md-3 g-4">
        {data?.hits.map((item, index) => (
          <Card key={index} toggleShow={toggleShow} recipe={item.recipe} />
        ))}
      </div>
      {show && <Modal recipe={recipe} setShow={setShow} show={show} />}
    </div>
  )
}
