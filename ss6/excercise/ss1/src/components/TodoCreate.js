import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import * as TodoService from "../services/TodoService";

export function TodoCreate() {


  const addTodo = async (values) => {
    const result = await TodoService.addTodoList(values);
    TodoService.getAllTodoList();
  };
  return (
    <>
    <Formik initialValues={{
            userId: "",
            title: "",
            completed: false
    }}
    onSubmit = { async (values,{setSubmitting}) =>{
        setSubmitting(false);
        await addTodoList(values);
    }}
    >
        <Form>
        <div>
            <h1>
              Todo List
            </h1>
            <Field
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
    </Formik>
    </>
  );
}
