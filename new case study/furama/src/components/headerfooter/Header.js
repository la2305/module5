import React from "react";
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
                  src="img\la.png"
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
                      <a href="feature.html" className="dropdown-item">
                        Features
                      </a>
                      <a href="blog.html" className="dropdown-item">
                        Blog Article
                      </a>
                      <a href="testimonial.html" className="dropdown-item">
                        Testimonial
                      </a>
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
