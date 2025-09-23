import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type Contact } from "../model/contact.model"

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    addContact: builder.mutation<void, Contact>({
      query: contact => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
    }),
  }),
})

export const { useContactsQuery, useAddContactMutation } = contactApi
