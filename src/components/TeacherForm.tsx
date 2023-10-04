import { FormEvent, useState } from "react"
import { Teacher } from "../interfaces/Teacher"
import useHTTP from "../hooks/useHTTP"

const TeacherForm = () => {
  const [teacher, setTeacher] = useState<Teacher>({
    name: "",
    phone: 0,
    id: 0,
    email: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    })
  }

  const postTeacher = async () => {
    await useHTTP("POST", "http://localhost:8080/api/teachers", {
      body: JSON.stringify(teacher),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTeacher();
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", height: "30vh" }}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" id="" />
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="" />
        <label htmlFor="phone">Phone Number</label>
        <input onChange={handleChange} type="number" name="phone" id="" />
        <button type="submit">Add Teacher</button>
      </form>
    </>
  )
}

export default TeacherForm