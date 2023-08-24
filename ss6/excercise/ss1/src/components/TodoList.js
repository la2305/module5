import { useState } from "react";
import { useEffect } from "react";
import * as TodoService from "../services/TodoService";
import "bootstrap/dist/css/bootstrap.css";
import {Field,Form, Formik } from "formik";
import {Link} from 'react-router-dom';

export function TodoList() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const result = await TodoService.getAllTodoList();
    setTodo((prev) => result);
  };

  const addTodo = async (values) => {
    const result = await TodoService.addTodoList(values);
    getAll();
  };

  return (
    <>
      <Formik
        initialValues={{
          userId: "",
          title: "",
          completed: false,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          await addTodo(values);
        }}
      >
        <Form>
          <div>
            <h1>Todo List</h1>
            <Link to="/add">Add book</Link>
            <Field
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed == true ? "completed" : "incomplete"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
