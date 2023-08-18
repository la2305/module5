import React from 'react';

function List(props) {
    return (
        <div>
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  {/* awe some */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  <link rel="stylesheet" href="style.css" />
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
  {/* Footer Start */}
  <div
    className="container-fluid  footer mt-5  wow fadeIn"
    style={{ backgroundColor: "#252c30" }}
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Our Office</h4>
          <p className="mb-2 text-light">
            <i className="fa-brands fa-telegram text-primary me-3" />
            536/17A Điện Biên Phủ, Thanh Khê, Đà Nẵng
          </p>
          <p className="mb-2 text-light">
            <i className="fa fa-phone-alt text-primary me-3" />
            0338210411
          </p>
          <p className="mb-2 text-light">
            <i className="fa fa-envelope text-primary me-3" />
            phuoc2305@gmail.com
          </p>
          <div className="d-flex pt-3">
            <a
              className="btn btn-square btn-primary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-primary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-primary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-primary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Quick Links</h4>
          <a
            className="btn btn-link text-light"
            style={{ display: "block", textAlign: "start" }}
            href=""
          >
            About Us
          </a>
          <a
            className="btn btn-link text-light"
            style={{ display: "block", textAlign: "start" }}
            href=""
          >
            Contact Us
          </a>
          <a
            className="btn btn-link text-light"
            style={{ display: "block", textAlign: "start" }}
            href=""
          >
            Our Services
          </a>
          <a
            className="btn btn-link text-light"
            style={{ display: "block", textAlign: "start" }}
            href=""
          >
            Terms &amp; Condition
          </a>
          <a
            className="btn btn-link text-light"
            style={{ display: "block", textAlign: "start" }}
            href=""
          >
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Business Hours</h4>
          <p className="mb-1">Monday - Friday</p>
          <h6 className="text-light">09:00 am - 07:00 pm</h6>
          <p className="mb-1">Saturday</p>
          <h6 className="text-light">09:00 am - 12:00 pm</h6>
          <p className="mb-1">Sunday</p>
          <h6 className="text-light">Closed</h6>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Newsletter</h4>
          <p className="text-light">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div
    className="container-fluid copyright py-4"
    style={{ backgroundColor: "#252525" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-secondary">
          ©{" "}
          <a className="fw-medium" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end text-secondary">
          Designed by Lê Quang Phước handsome
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="fa-regular fa-arrow-up" />
  </a>
</>

        </div>
    );
}

export default List;