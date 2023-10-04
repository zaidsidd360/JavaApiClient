import { useEffect, useReducer } from 'react'
import './App.css'
import TeacherList from './components/TeacherList'
import { Teacher } from './interfaces/Teacher';
import { reducer } from './reducers/Reducer';
import TeacherForm from './components/TeacherForm';
import useHTTP from './hooks/useHTTP';

function App() {
  const [teachers, dispatch] = useReducer<React.Reducer<Teacher[], any>>(
    reducer,
    [],
  );

  const url = "http://localhost:8080/api/teachers"

  const getTeachers = async () => {
    const { response } = await useHTTP("GET", url)
    const teachers = (await response).teachers
    dispatch({ type: "INITIALIZE_TEACHERS", payload: { teachers } })
  }

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <div className='appContainer'>
      <TeacherList teachers={teachers} />
      <TeacherForm />
    </div>
  )
}

export default App
