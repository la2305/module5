import * as StudentService from "../service/StudentService";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

const editStudent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [student, setStudent] = useState();

  const handleSubmit = async (formData) => {
    await StudentService.editStudent(formData);
    navigate("/");
  };

  const loadStudentDetail = async (id) => {
    const data = await StudentService.getStudent(id);
    setStudent(data);
  };

  useEffect(() => {
    if (params.id) {
      loadProductDetail(params.id);
    }
  }, [params]);

  if (!student) {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          dob: "",
          gender: "",
          class: "",
          school: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("tên không để trống"),
          dob: Yup.string().required("ngày không để trống"),
        })}
        onSubmit={async (values) => {
          await handleSubmit(values);
        }}
      >
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
          <div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default editStudent;
