import React, { useState } from "react";
import * as CustomerService from "../../services/CustomerService";
import * as CustomerTypeService from "../../services/CustomerTypeService";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const CustomerEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [customer, setCustomer] = useState();

  const [customerTypes, setCustomerTypes] = useState([]);

  const loadListCustomerType = async () => {
    const result = await CustomerTypeService.getCustomerTypes();
    setCustomerTypes((prev) => result);
  };

  useEffect(() => {
    loadListCustomerType();
  });

  const handleSubmit = async (formData) => {
    await CustomerService.editCustomer(formData);
    navigate("/customer/list");
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

  const loadCustomer = async (id) => {
    const data = await CustomerService.getCustomer(id);
    const newData = {
      ...data,
      customerType: `${JSON.stringify(data.customerType)}`,
    };
    setCustomer(newData);
  };

  useEffect(() => {
    if (params.id) {
      loadCustomer(params.id);
    }
  }, [params]);

  if (!customer) {
    return null;
  }
  return (
    <>
      <>
        {/* form-create */}
        <Formik
          initialValues={{
            id: customer?.id,
            name: customer?.name,
            dob: customer?.dob,
            gender: customer?.gender,
            identity: customer?.identity,
            phone: customer?.phone,
            email: customer?.email,
            type: customer?.type,
            location: customer?.location,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name can not empty"),
            dob: Yup.string().required("Date of birth can not empty"),
            gender: Yup.string().required("Gender can not empty"),
            identity: Yup.string().required(
              "Identity card number can not empty"
            ),
            phone: Yup.string().required("Phone number can not empty"),
            email: Yup.string().required("Email can not empty"),
            location: Yup.string().required("Location can not empty"),
          })}
          onSubmit={async (values) => {
            const newValue = {
              ...values,
              customerType: JSON.parse(values.customerType),
            };
            await handleSubmit(newValue);
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
                      id="customer-name"
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
                      id="date-of-birth"
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
                      id="gender"
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
                        <option value={`${JSON.stringify(customerType)}`}>
                          {customerType.name}
                        </option>
                      ))}
                    </Field>  
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
export default CustomerEdit;
