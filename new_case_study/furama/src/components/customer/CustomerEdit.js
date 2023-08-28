import React from "react";
const CustomerEdit =() =>{
    return (
        <>
          <>
            {/* form-create */}
            <div className="registration-form">
              <form>
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
                      <input
                        type="text"
                        className="form-control item"
                        id="customer-name"
                        placeholder="Customer name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control item"
                        id="date-of-birth"
                        placeholder="Date of birth"
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control item form-select" id="gender">
                        <option disabled="" selected="">
                          Gender
                        </option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="identity-card-number"
                        placeholder="Identity card number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="phone-number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control item form-select"
                        id="cusomer-type"
                      >
                        <option disabled="" selected="">
                          Customer type
                        </option>
                        <option value="">Diamond</option>
                        <option value="">Platinium</option>
                        <option value="">Gold</option>
                        <option value="">Silver</option>
                        <option value="">Member</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control item"
                        id="location"
                        placeholder="Location"
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
        </>
      );
};
export default CustomerEdit;