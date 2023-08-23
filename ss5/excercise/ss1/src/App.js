import {Formik,Field,Form,ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";


const ContractForm = () => (
  <div>
    <h1>ContractForm</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: ""
      }}
      
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        alert('Add contact successfully');
    }}

      validationSchema={Yup.object().shape({
        name: Yup.string()
        .required('name can not empty'),
        email: Yup.string()
        .required('email can not em[ty')
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Email is not valid"),
        phone: Yup.string()
        .required('phone can not empty'),
        message: Yup.string()
        .required('message can not empty')
      })}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          name="name"
          type="text"
          placeholder="enter name"
        />
        <ErrorMessage name="name" component='span' className="form-error text-danger"></ErrorMessage>
        <br></br>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="text" placeholder="enter email"></Field>
        <ErrorMessage name="email" component='span' className="form-error text-danger"></ErrorMessage>
        <br></br>
        <label htmlFor="phone">Phone</label>
        <Field
          id="phone"
          name="phone"
          type="text"
          placeholder="enter number phone"
        />
        <ErrorMessage name="phone" component='span' className="form-error text-danger"></ErrorMessage>
        <br></br>
        <label htmlFor="message">Message</label>
        <Field
          id="message"
          name="message"  
          type="textarea"
          placeholder="enter location"
        />
        <ErrorMessage name="message" component='span' className="form-error text-danger"></ErrorMessage>
        <br></br>
        <button type="submit">Đăng kí</button>
      </Form>
    </Formik>
  </div>
);

export default ContractForm;
