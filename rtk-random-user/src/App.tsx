import { useEffect, useState } from "react"
import "./App.css"
import { useGetUsersQuery } from "./services/users"
import {
  FaCalendarTimes,
  FaEnvelopeOpen,
  FaLock,
  FaMap,
  FaPhone,
  FaUser,
} from "react-icons/fa"

type Person = {
  name: string
  street: string
  email: string
  password: string
  age: number
  phone: string
  image: string
}

export const App = () => {
  const [person, setPerson] = useState<Person>()
  const [value, setValue] = useState("Random Person")
  const [title, setTitle] = useState("name")

  const { data, isLoading, refetch } = useGetUsersQuery()
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg"

  useEffect(() => {
    if (data) {
      const randomPerson = data.results[0]
      const { phone, email } = randomPerson
      const { large: image } = randomPerson.picture
      const { password } = randomPerson.login
      const { first, last } = randomPerson.name
      const {
        dob: { age },
      } = randomPerson
      const {
        street: { number, name },
      } = randomPerson.location
      const newPerson: Person = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number.toString()} ${name}`,
        name: `${first} ${last}`,
      }
      setPerson(newPerson)
      setValue(newPerson.name)
      setTitle("name")
    }
  }, [data])

  const handleValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains("icon")) {
        const newValue = e.target.getAttribute("data-label") as keyof Person
        if (person) {
          setTitle(newValue)
          setValue(person[newValue].toString())
        }
      }
    }
  }

  return (
    <main className="App">
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person ? person.image : defaultImage}
            alt="random_user"
            className="user-img"
          />
          <p className="user-title">My {title}</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              data-label="name"
              onMouseOver={handleValue}
              className="icon"
            >
              <FaUser />
            </button>
            <button
              data-label="email"
              onMouseOver={handleValue}
              className="icon"
            >
              <FaEnvelopeOpen />
            </button>
            <button data-label="age" onMouseOver={handleValue} className="icon">
              <FaCalendarTimes />
            </button>
            <button
              data-label="street"
              onMouseOver={handleValue}
              className="icon"
            >
              <FaMap />
            </button>
            <button
              data-label="phone"
              onMouseOver={handleValue}
              className="icon"
            >
              <FaPhone />
            </button>
            <button
              data-label="password"
              onMouseOver={handleValue}
              className="icon"
            >
              <FaLock />
            </button>
          </div>
          <button
            className="btn"
            type="button"
            // Promise-returning function provided to attribute where a void return was expected.警告対策として
            // 関数をIIFEでラップする
            onClick={() => {
              void (async () => {
                await refetch()
              })()
            }}
          >
            {isLoading ? "Loading..." : "Get Random User"}
          </button>
        </div>
      </div>
    </main>
  )
}
