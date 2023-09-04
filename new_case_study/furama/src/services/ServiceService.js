import axios from "axios";

export const getServiceList = async () =>{
    const result = await axios.get(`http://localhost:8080/services`);
    return result.data;
}
export const createService = async(service) =>{
    await axios.post(`http://localhost:8080/services`,service);
}

export const deleteService = async (id)=>{
    await axios.delete(`http://localhost:8080/services/${id}`);
}
