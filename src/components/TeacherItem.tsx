import React, { useState } from "react";
import { Teacher } from "../interfaces/Teacher";
import useHTTP from "../hooks/useHTTP";

interface ITeacherItemPropType {
  teacher: Teacher;
  index: number;
}

const TeacherItem = ({ teacher, index }: ITeacherItemPropType) => {
  const [wantsToEdit, setWantsToEdit] = useState(false);

  const [currTeacher, setCurrTeacher] = useState<Teacher>({
    name: teacher.name,
    phone: teacher.phone,
    id: teacher.id,
    email: teacher.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTeacher({
      ...currTeacher,
      [e.target.name]: e.target.value,
    });
  };

  const deleteTeacher = () => {
    useHTTP("DELETE", "http://localhost:8080/api/teachers", {
      body: JSON.stringify({ name: teacher.name, id: teacher.id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          {wantsToEdit ? (
            <input
              value={currTeacher.name}
              onChange={handleChange}
              type="text"
              name="name"
            />
          ) : (
            <p>{teacher.name}</p>
          )}
        </td>
        <td>
          {wantsToEdit ? (
            <input
              value={currTeacher.phone}
              onChange={handleChange}
              type="number"
              name="phone"
            />
          ) : (
            <p>{teacher.phone}</p>
          )}
        </td>
        <td>
          {wantsToEdit ? (
            <input
              value={currTeacher.email}
              onChange={handleChange}
              type="email"
              name="email"
            />
          ) : (
            <p>{teacher.email}</p>
          )}
        </td>
        <td>
          <button onClick={deleteTeacher}>Delete</button>{" "}
          {!wantsToEdit ? (
            <button
              onClick={() => {
                setWantsToEdit(true);
              }}
            >
              edit
            </button>
          ) : (
            <button onClick={() => setWantsToEdit(false)}>save</button>
          )}
        </td>
      </tr>
    </>
  );
};

export default TeacherItem;
