import React from "react";
import * as LibraryService from "../service/LibraryService";
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

export function AddBook() {
  const navigate = useNavigate();
  const addBook = async (values) => {
    const result = await LibraryService.addBookToLibrary(values);
    navigate("/");
  };
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          await addBook(values);
        }}
      >
        <Form>
          <h1>Add new book</h1>
          <div>titel</div>
          <Field type="text" name="title"></Field>
          <div>quantity</div>
          <Field type="number" name="quantity"></Field>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
