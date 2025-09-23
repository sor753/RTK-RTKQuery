import { Link, useParams } from "react-router-dom"
import { useContactQuery } from "../services/contactApi"
import { useEffect } from "react"
import { toast } from "react-toastify"
import "./Info.css"

const Info = () => {
  const { id } = useParams()

  const { data, error } = useContactQuery(id ?? "")

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!")
    }
  }, [error])

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{data?.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{data?.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{data?.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Info
