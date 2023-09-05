import axios from "axios";

export const getClothingList = async (page,search) => {
    const result = await axios.get(`http://localhost:8080/api/clothing?page=${page}&limit=2&name_like=${search}`);
    return result;
};
export const getClothing = async (id) =>{
    const result = await axios.get(`http://localhost:9000/clothing/${id}`);
    return result.data
}
export const editClothing =async (clothing) =>{
    await axios.put(`http://localhost:9000/clothing/${clothing.id}`,clothing);
}
export const deleteClothing = async (id) =>{
    await axios.delete(`http://localhost:8080/api/`+id);
}
export const createClothing = async (clothing) =>{
    await axios.post(`http://localhost:9000/clothing`,clothing);
}