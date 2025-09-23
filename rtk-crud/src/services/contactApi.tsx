import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type Contact } from "../model/contact.model"

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Contacts"],
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    contact: builder.query<Contact, string>({
      query: id => `/contacts/${id}`,
      providesTags: ["Contacts"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    addContact: builder.mutation<void, Contact>({
      query: contact => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    deleteContact: builder.mutation<void, string>({
      query: id => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: builder.mutation<Contact, Required<Contact>>({
      query: body => ({
        url: `/contacts/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
})

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi
