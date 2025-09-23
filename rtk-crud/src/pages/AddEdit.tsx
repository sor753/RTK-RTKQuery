import { useEffect, useState } from "react"
import { type Contact } from "../model/contact.model"
import { useNavigate, useParams } from "react-router-dom"
import "./AddEdit.css"
import { useContactQuery, useAddContactMutation } from "../services/contactApi"
import { toast } from "react-toastify"

const initialState: Contact = {
  name: "",
  email: "",
  contact: "",
}

const AddEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [addContact] = useAddContactMutation()
  const { data, error } = useContactQuery(id ?? "")
  console.log(data)

  const [editMode, setEditMode] = useState(false)
  const [formValue, setFormValue] = useState(initialState)
  const { name, email, contact } = formValue

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!")
    }
  }, [error])

  useEffect(() => {
    if (data) {
      setEditMode(true)
      setFormValue({ ...data })
    } else {
      setEditMode(false)
      setFormValue({ ...initialState })
    }
  }, [id, data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name && !email && !contact) {
      toast.error("Please provide value into each input field")
    } else {
      await addContact(formValue)
      void navigate("/")
      toast.success("Contact Added Successfully")
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={e => {
          void handleSubmit(e)
        }}
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
