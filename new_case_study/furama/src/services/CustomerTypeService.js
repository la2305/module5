import axios from "axios";

export const getCustomerTypes=async ()=>{
    try{
        const result = await axios.get(`http://localhost:8080/customertype`);
        return result.data
    }catch(e){
        console.log(e);
    }
}