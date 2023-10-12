import { Teacher } from "../interfaces/Teacher";
import TeacherItem from "./TeacherItem";

interface ITeacherListPropType {
  teachers: Teacher[];
}

const TeacherList = ({ teachers }: ITeacherListPropType) => {
  return (
    <div className="teachersListContainer">
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Teacher Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => {
            return (
              <TeacherItem
                key={teacher.email}
                teacher={teacher}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
