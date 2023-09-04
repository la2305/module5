import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CustomerTypeService from "../../services/CustomerTypeService"
import * as ServiceService from "../../services/ServiceService"
import { Form,Formik,ErrorMessage,Field } from "formik";
import * as Yup from "yup"



const ServiceEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [services,setServices] = useState();
  const [typeRentals, setTypeRentals] = useState([]);
  const loadListTypeRental = async () =>{
    const result = await CustomerTypeService.getCustomerTypes();
    setTypeRentals(result);
  }
  useEffect(()=>{
    loadListTypeRental();
  },[]);
  const handleSubmit = async (value) =>{
    const newValue = {...value,typeRental: JSON.parse(value.typeRental)}
    // const result = await ServiceService.editService(newValue);
    navigate("/")
  }
  return (
    <>
      {/* form-create */}
      <Formik
        initialValues={{
          name: "",
          area: "",
          image: "",
          typeRental:"",
          description:""
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name can not empty"),
          area: Yup.number().required("Area can not empty"),
          image: Yup.string().required("image can not empty"),
          description: Yup.string().required("descoript")
        })}
        onSubmit={async (values) => {
          await handleSubmit(values);
        }}
      >
        <Form>
          <div className="registration-form">
            <div className="container">
              <div className="form-icon">
                <span>
                  <i className="fa-solid fa-house" />
                </span>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control item"
                      name="name"
                      placeholder="Service name"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="number"
                      className="form-control item"
                      name="area"
                      placeholder="Area use"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control item"
                      name="image"
                      placeholder="image service"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      as="select"
                      className="form-control item"
                      name="typeRental"
                    >{
                      typeRentals.map((typeRental)=>(
                        <option value={`${JSON.stringify(typeRental)}`}>{typeRental.name}</option>
                        ))
                    }</Field>
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control item"
                      name="description"
                      placeholder="description"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <img
                    className=" h-100 w-100 img-thumbnail"
                    src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722781/722781/63984554_XL.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
                    alt="https://upload.wikimedia.org/wikipedia/commons/e/eb/Old_Alt_House_Glover_Garden_Nagasaki_Left.JPG"
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-block create-account">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {/* form-create */}
    </>
  );
};
export default ServiceEdit;
