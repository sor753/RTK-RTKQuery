import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type RecipeResponse } from "../types/recipe.type"
import { type HealthValue } from "../App"

const APP_KEY = import.meta.env.VITE_APP_KEY as string
const APP_ID = import.meta.env.VITE_APP_ID as string

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  }),
  endpoints: builder => ({
    // サーバーからデータを取得してキャッシュする場合はクエリ、サーバーに更新を送信する場合はミューテーション
    getRecipes: builder.mutation<
      RecipeResponse,
      { query: string; health: HealthValue }
    >({
      query: ({ query, health }) => {
        return {
          url: `?app_id=${APP_ID}&app_key=${APP_KEY}&type=edamam-generic&q=${query}&health=${health}`,
          method: "GET",
        }
      },
    }),
  }),
})

export const { useGetRecipesMutation } = recipeApi
