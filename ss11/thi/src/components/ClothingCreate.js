import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ClothingType from "../service/ClothingType";
import * as ClothingService from "../service/ClothingService";
import { Formik,Form,ErrorMessage,Field } from "formik";
import * as Yup from "yup";

const ClothingCreate = () => {
  const navigate = useNavigate();
  const [clothingTypes, setClothingTypes] = useState([]);

  const loadClothingType = async () => {
    const result = await ClothingType.getTypeList();
    setClothingTypes(result);
  };

  useEffect(() => {
    loadClothingType();
  }, []);

  const handleSubmit = async (formData) => {
    const newValue = { ...formData, type: JSON.parse(formData.type) };
    await ClothingService.createClothing(newValue);
    navigate("/");
  };
  return (
    <>
      <Formik
        initialValues={{
          code: "",
          name: "",
          date: "",
          quantity: "",
          type: `${JSON.stringify({
            "id":1,
            "name":"span",
          })}`,
        }}
        validationSchema={Yup.object({
          code: Yup.number().required("code can not empty"),
          name: Yup.string().required("name can not empty"),
          date: Yup.string().required("date can not empty"),
          quantity: Yup.number("quantity can not empty"),
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
                <span></span>
              </div>

              <div>
                <div className="form-group">
                  <Field
                    type="number"
                    name="code"
                    className="form-control item"
                    placeholder="Customer name"
                  />
                  <ErrorMessage
                    name="code"
                    component="span"
                    className="text-danger"
                  ></ErrorMessage>
                </div>
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
                    name="date"
                    className="form-control item"
                    placeholder="Date of birth"
                  />
                  <ErrorMessage
                    name="date"
                    component="span"
                    className="text-danger"
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="number"
                    name="quantity"
                    className="form-control item"
                    id="phone-number"
                    placeholder="quantity"
                  />
                  <ErrorMessage
                    name="quantity"
                    component="span"
                    className="text-danger"
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    as="select"
                    name="type"
                    className="form-control item form-select"
                  >
                    {clothingTypes.map((clothingType) => (
                      <option value={`${JSON.stringify(clothingType)}`}>
                        {clothingType.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="span"
                    className="text-danger"
                  ></ErrorMessage>
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
    </>
  );
};
export default ClothingCreate;
