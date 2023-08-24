import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const formSubmit = () => (
  <div>
    <h1>Tờ khai y tế</h1>
    <Formik
      initialValues={{
        fullname: "",
        identity: "",
        year: "",
        nationality: "",
        province: "",
        district: "",
        town: "",
        location: "",
        phone: "",
        email: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        alert("submit successfully");
      }}
      validationSchema={Yup.object().shape({
        fullname: Yup.string().required("name can not empty"),
        identity: Yup.string().required("identity card can not empoty"),
        year: Yup.number()
          .required("year can not empty")
          .min(1900, "year more than 1900"),
        nationality: Yup.string().required("nationality can not empty"),
        province: Yup.string().required("province"),
        district: Yup.string().required("district can not empty"),
        town: Yup.string().required("town can not empty"),
        location: Yup.string().required("location can not empty"),
        phone: Yup.string().required("phone can not empty"),
        email: Yup.string()
          .required("email can not empty")
          .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "email is not valid"
          ),
      })}
    >
      <Form>
        <p>Họ tên</p>
        <Field
          id="fullname"
          name="fullname"
          type="text"
          placeholder="full name"
        ></Field>
        <ErrorMessage
          name="fullname"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Số chứng minh nhân dân</p>
        <Field
          id="identity"
          name="identity"
          type="text"
          placeholder="identity card number"
        ></Field>
        <ErrorMessage
          name="identity"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Năm sinh</p>
        <Field id="year" name="year" type="text" placeholder="year"></Field>
        <ErrorMessage
          name="year"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <br></br>
        <span>
          Giới tính<input type="radio" id="genderMale" name="gender"></input>
          <label for="genderMale">Nam</label>
          <input type="radio" id="genderFemale" name="gender"></input>
          <label for="genderFemale">Nữ</label>
        </span>
        <p>Quốc tịch</p>
        <Field
          id="nationality"
          name="nationality"
          type="text"
          placeholder="nationality"
        ></Field>
        <ErrorMessage
          name="nationality"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Công ty làm việc</p>
        <Field
          id="company"
          name="company"
          type="text"
          placeholder="company"
        ></Field>
        <ErrorMessage
          name="company"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Bộ phận làm việc</p>
        <Field
          id="department"
          name="department"
          type="text"
          placeholder="department"
        ></Field>
        <ErrorMessage
          name="department"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <br></br>
        <span>
          <label for="healthcare">Có thẻ bảo hiểm y tế</label>
          <input type="radio" id="healthcare" name="healthcare"></input>
        </span>
        <h5>Địa chỉ liên lạc tại Việt Nam</h5>
        <p>Tỉnh thành</p>
        <Field
          id="province"
          name="province"
          type="text"
          placeholder="province"
        ></Field>
        <ErrorMessage
          name="province"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Quận/Huyện</p>
        <Field
          id="district"
          name="district"
          type="text"
          placeholder="district"
        ></Field>
        <ErrorMessage
          name="district"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Phường/xã</p>
        <Field id="town" name="town" type="text" placeholder="town"></Field>
        <ErrorMessage
          name="town"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Số nhà</p>
        <Field
          id="location"
          name="location"
          type="text"
          placeholder="location"
        ></Field>
        <ErrorMessage
          name="location"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Điện thoại</p>
        <Field id="phone" name="phone" type="text" placeholder="phone"></Field>
        <ErrorMessage
          name="phone"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Email</p>
        <Field id="email" name="email" type="text" placeholder="email"></Field>
        <ErrorMessage
          name="email"
          component="span"
          className="form-error text-danger"
        ></ErrorMessage>
        <p>Trong vòng 14 ngày qua</p>
        <Field as="textarea" name="declare" placeholder="declare"></Field>
        <div>
          <p>Trong vòng 14 ngày qua</p>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              Sốt
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Ho
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Khó thở
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Viêm phổi
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Đau họng
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Mệt mỏi
            </label>
          </div>
        </div>
        <button type="submit">Nộp</button>
      </Form>
    </Formik>
  </div>
);
export default formSubmit;
