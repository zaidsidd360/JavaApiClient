import { Teacher } from "../interfaces/Teacher";
import axios from "axios";

  export const getTeachers = (url: string, dispatch: any) => {
    axios.get(url).then((response) => {
      const teachers = response.data.teachers as Teacher[]
      dispatch({ type: "INITIALIZE_TEACHERS", payload: { teachers } })
    })
  }

  export const POST = (url: string, teacher: Teacher): Promise<Response> => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(teacher),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  export const DELETE = (url: string, id: number): Promise<Response> => {
    return fetch(url, {
      method: "DELETE",
      body: JSON.stringify({id: id}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }