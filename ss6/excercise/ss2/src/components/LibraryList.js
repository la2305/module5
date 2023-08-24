import { useState } from "react";
import { useEffect } from "react";
import * as LibraryService from "../service/LibraryService";
import { Form, Formik, Field } from "formik";
// import {Link} from 'react-router-dom';


export function LibraryList() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const result = await LibraryService.getAllLibraryList();
    setBook((prev) => result);
  };
  const deleteBook = async (id) => {
    const result = await LibraryService.deleteBook(id);
    getAll();
  };

  return (
    <>
      <h1>Library</h1>
      {/* <Link to="/add">Add book</Link> */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td><button onClick={() =>deleteBook(`${book.id}`)} className="btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
