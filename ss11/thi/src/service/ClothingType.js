import axios from "axios";

export const getTypeList = async () => {
    const result = await axios.get(`http://localhost:9000/type`);
    return result.data;
};
