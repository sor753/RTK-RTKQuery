import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const APP_KEY = import.meta.env.APP_KEY as string
const APP_ID = import.meta.env.APP_ID as string

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  }),
  endpoints: builder => ({
    getRecipes: builder.mutation({
      query: (q: string) =>
        `?app_id=${APP_ID}&app_key=${APP_KEY}&type=edamam-generic&q=${q}`,
    }),
  }),
})

export const { useGetRecipesMutation } = recipeApi
