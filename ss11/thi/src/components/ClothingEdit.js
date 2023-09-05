import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import * as ClothingService from "../service/ClothingService";
import * as ClothingType from "../service/ClothingType";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const ClothingEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [clothing, setClothing] = useState();
  const [clothingTypes, setClothingTypes] = useState([]);

  const loadClothingType = async () => {
    const result = await ClothingType.getTypeList();
    setClothingTypes((prev)  => result);
  };
  useEffect(() => {
    loadClothingType();
  }, []);

  const handleSubmit = async (formData) => {
    await ClothingService.editClothing(formData);
    navigate("/");
  };

  const loadClothing = async (id) => {
    const data = await ClothingService.getClothing(id);
    const newData = {
      ...data,
      type: `${JSON.stringify(data.type)}`,
    };
    setClothing(newData);
  };

  useEffect(() => {
    if (params.id) {
      loadClothing(params.id);
    }
  }, [params]);

  if (!clothing) {
    return null;
  }
  return (
    <>
      <Formik
        initialValues={{
          id: clothing?.id,
          code: clothing?.code,
          name: clothing?.name,
          date: clothing?.date,
          quantity: clothing?.quantity,
          type: clothing?.type,
        }}
        validationSchema={Yup.object({
          code: Yup.number().required("code can not empty"),
          name: Yup.string().required("name can not empty"),
          date: Yup.string().required("date can not empty"),
          quantity: Yup.number("quantity can not empty"),
        })}
        onSubmit={async (values) =>{
            const newValue ={
                ...values,type: JSON.parse(values.type),
            };
            await handleSubmit(newValue);
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
export default ClothingEdit;
