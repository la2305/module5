import axios from "axios";

export const getAllStudent = async () =>{
    const result = await axios.get(`http://localhost:9000/student`);
    return result.data;
}
export const deleteStudent = async (id) =>{
    await axios.delete(`http://localhost:9000/student/${id}`);
}
export const addStudent = async (product) =>{
    const result = await axios.post(`http://localhost:9000/student`,product);
    return result.data;
}
export const getStudent = async (id) =>{
    const result = await axios.get(`http://localhost:9000/student/${id}`);
    return result.data;
}
export const editStudent = async (student) =>{
    await axios.put(`http://localhost:9000/student/${student.id}`,student);
}
