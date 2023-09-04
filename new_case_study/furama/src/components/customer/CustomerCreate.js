import React, { useEffect, useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as CustomerService from "../../services/CustomerService";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getCustomerTypes } from "../../services/CustomerTypeService";

const CustomerCreate = () => {
  const navigate = useNavigate();

  const [customerTypes, setCustomerTypes] = useState([]);

  const loadListCustomerType = async () => {
    const result = await getCustomerTypes();
    setCustomerTypes((prev) => result)
  };

  useEffect(() => {
    loadListCustomerType();
  }, []);

  const handleSubmit = async (formData) => {
    const newValue = {
      ...formData, customerType: JSON.parse(formData.customerType)
    }

    await CustomerService.addCustomer(newValue);
    navigate(`/customer/list`);
    toast("🦄 create success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <>
        {/* form-create */}
        <Formik
          initialValues={{
            name: "",
            dob: "",
            gender: "",
            identity: "",
            phone: "",
            email: "",
            customerType: `${JSON.stringify({
              "id": 1,
              "name": "Member",
            })}`,
            location: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name can not empty")
              .matches(/^(?:[A-Z][a-zA-Z]*\s*)+$/, "Name is not valid"),
            dob: Yup.string().required("Date of birth can not empty"),
            gender: Yup.string().required("Gender can not empty"),
            identity: Yup.string()
              .required("Identity card number can not empty")
              .matches(/[0-9]{9}/, "identity is not valid"),
            phone: Yup.string().required("Phone number can not empty"),
            email: Yup.string()
              .required("Email can not empty")
              .matches(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                "email is not valid"
              ),
            location: Yup.string().required("Location can not empty"),
          })}
          onSubmit={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Form>
            <div className="registration-form">
              <div className="container-fluid" />
              <div className="container">
                <div className="form-icon">
                  <span>
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                </div>

                <div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      className="form-control item"
                      placeholder="Customer name"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      type="date"
                      name="dob"
                      className="form-control item"
                      placeholder="Date of birth"
                    />
                    <ErrorMessage
                      name="dob"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      as="select"
                      name="gender"
                      className="form-control item form-select"
                    >
                      <option disabled="" selected="">
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      type="number"
                      name="identity"
                      className="form-control item"
                      id="identity-card-number"
                      placeholder="Identity card number"
                    />
                    <ErrorMessage
                      name="identity"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      type="number"
                      name="phone"
                      className="form-control item"
                      id="phone-number"
                      placeholder="Phone number"
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="email"
                      className="form-control item"
                      id="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      as="select"
                      name="customerType"
                      className="form-control item form-select"
                    >
                      {customerTypes.map((customerType) => (
                        <option value={`${JSON.stringify(customerType)}`}>{customerType.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="type"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="location"
                      className="form-control item"
                      id="location"
                      placeholder="Location"
                    />
                    <ErrorMessage
                      name="location"
                      component="span"
                      className="text-danger"
                    ></ErrorMessage>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-block create-account"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
        {/* form-create */}
      </>
    </>
  );
};
export default CustomerCreate;
