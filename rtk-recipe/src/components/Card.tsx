import { type Recipe } from "../types/recipe.type"

type CardProps = {
  toggleShow: (item: Recipe) => void
  recipe: Recipe
}

const Card = ({ recipe, toggleShow }: CardProps) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.label}
          style={{ height: "180px", objectFit: "cover" }}
          onClick={() => {
            toggleShow(recipe)
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.label}</h5>
          <p className="card-text">
            Calories: {Math.round(recipe.calories)} kcal
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
