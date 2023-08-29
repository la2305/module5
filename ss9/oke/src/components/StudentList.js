import * as StudentService from "../service/StudentService";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentList = () => {
  const [Students, SetStudents] = useState([]);
  const navigate = useNavigate();

  const getList = async () => {
    const data = await StudentService.getAllStudent();
    SetStudents(data);
  };

  useEffect(() => {
    getList();
  }, []);

  const deleteStudent = async (id) => {
    await StudentService.deleteStudent(id);
    await getList();
  };

  return (
    <>
        <Link to="/add">Create</Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>dob</th>
            <th>gender</th>
            <th>class</th>  
            <th>school</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => {
            return (
              <tr key={`p_${index}`}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.class}</td>
                <td>{student.school}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteStudent(`${student.id}`);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td><button type="button" onClick={()=>{navigate(`/edit/${student.id}`)}}>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default StudentList;
