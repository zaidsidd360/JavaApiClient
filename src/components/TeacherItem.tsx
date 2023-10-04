import React, { FormEvent, useEffect, useState } from 'react'
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

  useEffect(() => {
    if (teacher) {
      setCurrTeacher(teacher)
    }
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTeacher({ ...currTeacher, name: e.target.value });
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTeacher({ ...currTeacher, phone: Number(e.target.value) });
  }

  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTeacher({ ...currTeacher, email: e.target.value });
  }

  return (
    <>
      <tr>
        <td>{teacher.id}</td>
        <td>{wantsToEdit ? <input value={currTeacher.name} onChange={handleNameChange} type='text' /> : <p>{teacher.name}</p>}</td>
        <td>{wantsToEdit ? <input value={currTeacher.phone} onChange={handlePhoneChange} type='number' /> : <p>{teacher.phone}</p>}</td>
        <td>{wantsToEdit ? <input value={currTeacher.email} onChange={handleMailChange} type='email' /> : <p>{teacher.email}</p>}</td>
        <td><button>delete</button>  <button onClick={() => { setWantsToEdit(!wantsToEdit) }}>edit</button></td>
      </tr>
    </>
  )
}

export default TeacherItem