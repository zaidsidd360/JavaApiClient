import { Teacher } from "../interfaces/Teacher";

export const reducer = (teachers: Teacher[], action: any) => {
  switch (action.type) {
    case "INITIALIZE_TEACHERS":
      return action.payload.teachers;
    case "DELETE_TEACHER":
      return [teachers.filter((teacher: Teacher) => teacher.id !== action.payload.id)]
    default:
      throw new Error();
  }
};