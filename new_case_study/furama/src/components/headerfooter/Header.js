import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <>
        {/* Navbar Start */}
        <div className="container-fluid bg-white sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
              <a href="index.html" className="navbar-brand">
                <img
                  className="img-fluid"
                  src="https://thumbs.dreamstime.com/b/print-270061791.jpg"
                  alt="Logo"
                  style={{ width: 100 }}
                />
              </a>
              <button
                type="button"
                className="navbar-toggler ms-auto me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="about.html" className="nav-item nav-link">
                    About
                  </a>
                  <a href="product.html" className="nav-item nav-link">
                    Products
                  </a>
                  <a href="store.html" className="nav-item nav-link">
                    Store
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu bg-light rounded-0 m-0">
                        <Link to="/" className="dropdown-item">Service</Link>
                        <Link to="/contract/list" className="dropdown-item">Contract</Link>                     
                        <Link to="/customer/list" className="dropdown-item">Customer</Link>                     
                      <a href="404.html" className="dropdown-item">
                        404 Page
                      </a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="border-start ps-4 d-none d-lg-block">
                  <button type="button" className="btn btn-sm p-0">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </>
    </>
  );
};
export default Header;
