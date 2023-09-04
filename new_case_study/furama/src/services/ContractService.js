import axios from "axios";

export const getContractList = async () =>{
    const result = await axios.get(`http://localhost:8080/contracts`);
    return result.data;
}

export const addContract = async (contract)=>{
    await axios.post(`http://localhost:8080/contracts`,contract);
}
