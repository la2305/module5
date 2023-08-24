import axios from "axios";

export const getAllLibraryList = async() =>{
    try{
        const result = await axios.get('http://localhost:8080/data');
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const addBookToLibrary = async(Book) =>{
    try{
        const result = await axios.post('http://localhost:8080/data',Book);
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteBook =async(id) =>{
    try{
        const result = await axios.delete('http://localhost:8080/data/'+id);
        return result.data;
    }catch(e){
        console.log(e);
    }
}