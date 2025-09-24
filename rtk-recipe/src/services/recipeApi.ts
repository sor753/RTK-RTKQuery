import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type RecipeResponse } from "../types/recipe.type"

const APP_KEY = import.meta.env.VITE_APP_KEY as string
const APP_ID = import.meta.env.VITE_APP_ID as string

console.log(APP_KEY, APP_ID)

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  }),
  endpoints: builder => ({
    // サーバーからデータを取得してキャッシュする場合はクエリ、サーバーに更新を送信する場合はミューテーション
    getRecipes: builder.mutation<RecipeResponse, string>({
      query: q => {
        return {
          url: `?app_id=${APP_ID}&app_key=${APP_KEY}&type=edamam-generic&q=${q}`,
          method: "GET",
        }
      },
    }),
  }),
})

export const { useGetRecipesMutation } = recipeApi
