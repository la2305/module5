import axios from "axios";

const getAllUser = async () => {
  const result = await axios.get("http://localhost:8080/users");
  return result.data;
};
export default getAllUser;

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:8080/users/${id}`);
};
