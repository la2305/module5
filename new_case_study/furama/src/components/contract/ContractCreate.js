import { Form, Formik,Field,ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as ContractService from "../../services/ContractService";


const ContractCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formData) =>{
    await ContractService.addContract(formData);
    navigate('/contract/list');
  }

  return (
    <>
      {/* form-create */}
      <div className="registration-form">
        <Formik initialValues={{
          code:"",
          dateStart:"",
          dateEnd:"",
          depositMoney:"",
          totalMoney:""
        }} validationSchema={Yup.object({
          code: Yup.string().required("code can not empty"),
          dateStart: Yup.string().required("Date start can not empty"),
          dateEnd: Yup.string().required("Date end can not empty"),
          depositMoney: Yup.string().required("Deposit money can not empty"),
          totalMoney: Yup.string().required("Total money can not empty")
        })} onSubmit={(values) =>{
            handleSubmit(values);
        }}>
        <Form>
          <div className="container">
            <div className="form-icon">
              <span>
                <i className="fa-solid fa-file-contract" />
              </span>
            </div>
            <div>
              <div className="form-group">
                <Field
                  name="code"
                  type="text"
                  className="form-control item"
                  id="code"
                  placeholder="Contract code"
                />
              </div>
              <div className="form-group">
                <Field
                  type="date"
                  className="form-control item"
                  id="dateStart"
                  placeholder="Date start"
                  name="dateStart"
                />
              </div>
              <div className="form-group">
                <Field
                  type="date"
                  className="form-control item"
                  id="dateEnd"
                  placeholder="Date end"
                  name ="dateEnd"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  className="form-control item"
                  id="depositMoney"
                  placeholder="Deposit money"
                  name="depositMoney"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  className="form-control item"
                  id="totalMoney"
                  placeholder="Total money"
                  name="totalMoney"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-block create-account">
                Submit
              </button>
            </div>
          </div>
        </Form>
        </Formik>
      </div>
      {/* form-create */}
    </>
  );
};
export default ContractCreate;
