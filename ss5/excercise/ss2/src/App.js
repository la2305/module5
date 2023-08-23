import {Formik,Field,Form,ErrorMessage} from "formik";
import React from "react";
import * as Yum from "yup";

const formSubmit = () => (
  <div>
    <h1>Tờ khai y tế</h1>
    <Formik>
    
    
    <Form>
    <p>Họ tên</p>
    <Field id="fullname" name="fullname" type="text" placeholder="full name"></Field>
    <p>Số chứng minh nhân dân</p>
    <Field id="identity" name="identity" type="text" placeholder="identity card number"></Field>
    <p>Năm sinh</p>
    <Field id="year" name="year" type="text" placeholder="year"></Field>
    <br></br>
    <span>Giới tính<input type="radio" id="genderMale" name="gender" ></input><label for="genderMale">Nam</label>
                    <input type="radio" id="genderFemale" name="gender" ></input><label for="genderFemale">Nữ</label>
    </span>
    <p>Quốc tịch</p>
    <Field id="nationality" name="nationality" type="text" placeholder="nationality"></Field>
    <p>Công ty làm việc</p>
    <Field id="company" name="company" type="text" placeholder="company"></Field>
    <p>Bộ phận làm việc</p>
    <Field id="department" name="department" type="text" placeholder="department"></Field>
    <br></br>
    <span><label for="healthcare">Có thẻ bảo hiểm y tế</label><input type="radio" id="healthcare" name="healthcare">
      </input>  
    </span>
    <h5>Địa chỉ liên lạc tại Việt Nam</h5>
    <p>Tỉnh thành</p>
    <Field id="province" name="province" type="text" placeholder="province"></Field>
    <p>Quận/Huyện</p>
    <Field id="district" name="district" type="text" placeholder="district"></Field>
    <p>Phường/xã</p>
    <Field id="town" name="town" type="text" placeholder="town"></Field>
    <p>Số nhà</p>
    <Field id="location" name="location" type="text" placeholder="location"></Field>
    <p>Điện thoại</p>
    <Field id="phone" name="phone" type="text" placeholder="phone"></Field>
    <p>Email</p>
    <Field id="email" name="email" type="text" placeholder="email"></Field>
    <p>Trong vòng 14 ngày qua</p>
    <Field as="textarea" name="declare" placeholder="declare"></Field>
    <div>
    <p>Trong vòng 14 ngày qua</p>
    <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>
    </div>
    </Form>
    </Formik>
  </div>
);
export default formSubmit;