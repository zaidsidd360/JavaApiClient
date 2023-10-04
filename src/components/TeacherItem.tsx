import React, { useState } from 'react'
import { Teacher } from '../interfaces/Teacher'

interface ITeacherItemPropType {
  teacher: Teacher;
}

const TeacherItem = ({ teacher }: ITeacherItemPropType) => {
  const [wantsToEdit, setWantsToEdit] = useState(false)

  const [currTeacher, setCurrTeacher] = useState<Teacher>({
    name: teacher.name,
    phone: teacher.phone,
    id: teacher.id,
    email: teacher.email
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTeacher({
      ...currTeacher,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <tr>
        <td>{teacher.id}</td>
        <td>{wantsToEdit ? <input value={currTeacher.name} onChange={handleChange} type='text' name='name' /> : <p>{teacher.name}</p>}</td>
        <td>{wantsToEdit ? <input value={currTeacher.phone} onChange={handleChange} type='number' name='phone' /> : <p>{teacher.phone}</p>}</td>
        <td>{wantsToEdit ? <input value={currTeacher.email} onChange={handleChange} type='email' name='email' /> : <p>{teacher.email}</p>}</td>
        <td><button>Delete</button>  <button onClick={() => { setWantsToEdit(!wantsToEdit) }}>edit</button></td>
      </tr>
    </>
  )
}

export default TeacherItem