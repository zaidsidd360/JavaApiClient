import { Teacher } from '../interfaces/Teacher'
import TeacherItem from './TeacherItem';

interface ITeacherListPropType {
  teachers: Teacher[];
}

const TeacherList = ({ teachers }: ITeacherListPropType) => {
  console.log(teachers)
  return (
    <div className='teachersListContainer'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Teacher Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => {
            return (
              <TeacherItem key={teacher.email} teacher={teacher} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherList