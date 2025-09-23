import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type User = {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string | null
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}
export type UsersResponse = {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me" }),
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getUsers: builder.query<UsersResponse, void>({
      query: () => "/api",
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
