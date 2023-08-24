import axios from "axios";

export const getAllTodoList = async () =>{
    try{
        const result = await axios.get('http://localhost:8080/todo');

        return result.data;
        //Trường hợp thành công
    }catch(e){
        console.log(e);
        //Trường hợp thất bại
    }
}

export const addTodoList = async (Todo) => {
    try{
        const result = await axios.post('http://localhost:8080/todo',Todo)
        return result.data;
    }catch(e){
        console.log(e);
    }
}