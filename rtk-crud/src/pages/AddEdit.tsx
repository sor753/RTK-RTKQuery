import { useState } from "react"
import { type Contact } from "../model/contact.model"
import { useNavigate } from "react-router-dom"
import "./AddEdit.css"

const initialState: Contact = {
  name: "",
  email: "",
  contact: "",
}

const AddEdit = () => {
  const navigate = useNavigate()

  const [formValue, setFormValue] = useState(initialState)
  const { name, email, contact } = formValue

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email ..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact no. ..."
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddEdit
