import { Link } from "react-router-dom"
import {
  useContactsQuery,
  useDeleteContactMutation,
} from "../services/contactApi"
import "./Home.css"
import { useEffect } from "react"
import { toast } from "react-toastify"

const Home = () => {
  const [deleteContact] = useDeleteContactMutation()

  const { data, error, isLoading } = useContactsQuery()

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!")
    }
  }, [error])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleDelete = async (id: string) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      await deleteContact(id)
      toast.success("Contact Deleted Successfully")
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/addContact">
        <button className="btn btn-add">Add Contact</button>
      </Link>
      <br />
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                {item.id && (
                  <td>
                    <Link to={`/editContact/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => {
                        void (item.id && handleDelete(item.id))
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`/info/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
