export type RecipeResponse = {
  from: number
  to: number
  count: number
  hits: {
    recipe: Recipe
  }[]
}

export type Recipe = {
  label: string
  image: string
  calories: number
}
