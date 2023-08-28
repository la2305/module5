import React from "react";
const ContractCreate = () => {
  return (
    <>
      {/* form-create */}
      <div className="registration-form">
        <form>
          <div className="container">
            <div className="form-icon">
              <span>
                <i className="fa-solid fa-file-contract" />
              </span>
            </div>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  id="contract-code"
                  placeholder="Contract code"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control item"
                  id="date-start"
                  placeholder="Date start"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control item"
                  id="date-end"
                  placeholder="Date end"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  id="deposit-money"
                  placeholder="Deposit money"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  id="total-money"
                  placeholder="Total money"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-block create-account">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* form-create */}
    </>
  );
};
export default ContractCreate;
