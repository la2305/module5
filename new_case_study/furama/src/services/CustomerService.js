import axios from "axios";

export const getCustomerList =async (page,search) =>{
    const result = await axios.get(`http://localhost:8080/Customers?_page=${page}&_limit=5&name_like=${search}`);
    return result;
}
export const addCustomer = async (customer) =>{
    await axios.post(`http://localhost:8080/Customers`,customer);
}
export const deleteCustomer = async (id) =>{
    await axios.delete(`http://localhost:8080/Customers/${id}`);
}

export const getCustomer = async (id) =>{
    const result= await axios.get(`http://localhost:8080/Customers/${id}`);
    return result.data;
}
export const editCustomer = async (customer) =>{
    await axios.put(`http://localhost:8080/Customers/${customer.id}`,customer);
}