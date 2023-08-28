import axios from "axios";

export const getServiceList = async () =>{
    const result = await axios.get(`http://localhost:8080/services`);
    return result.data;
}