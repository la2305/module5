import { useNavigate } from "react-router-dom";
import * as StudentService from "../service/StudentService";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik, Field } from "formik";
import { render } from "@testing-library/react";

const AddStudent = () => {
    const navigate = useNavigate();
    const handleSubmit = async (formData) =>{
        await StudentService.addStudent(formData);
        navigate('/');
    }
      return(
    <>
      <Formik initialValues={{
        name:"",
        dob:"",
        gender:"",
        class:"",
        school:""
      }} validationSchema={Yup.object({
        name: Yup.string().required('tên không để trống'),
        dob: Yup.string().required('ngày không để trống')
      })}
      onSubmit={async(values)=>{
        await handleSubmit(values);
      }}>
      <Form>
            <div>
                <label htmlFor="name">Nhập tên</label>
                <Field type="text" name="name"></Field>
                <ErrorMessage name="name" className="text-red"></ErrorMessage>
            </div>
            <div>
                <label htmlFor="dob">Nhập ngày sinh</label>
                <Field type="date" name="dob"></Field>
            </div>
            <div>
                <label htmlFor="gender">Giới tính</label>
                <Field type="text" name="gender"></Field>
            </div>
            <div>
                <label htmlFor="class">Class</label>
                <Field type="text" name="class"></Field>
                
            </div>
            <div>
                <label htmlFor="school">School</label>
                <Field type="text" name="school"></Field>
            </div>
            <div><button type="submit">submit</button></div>
        </Form>
      </Formik>
    </>
  );
};
export default AddStudent;
