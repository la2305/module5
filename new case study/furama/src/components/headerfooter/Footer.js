import React from "react";
const Footer = () =>{
    return(
        <>
  {/* Footer Start */}
  <div
    className="container-fluid footer mt-5 wow fadeIn"
    style={{ backgroundColor: "#252c30" }}
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Our Office</h4>
          <p className="footerTea mb-2 mb-2">
            <i className="fa-brands fa-telegram text-primary me-3" />
            536/17A Điện Biên Phủ, Thanh Khê, Đà Nẵng
          </p>
          <p className="footerTea mb-2 mb-2">
            <i className="footerTea gray-words fa fa-phone-alt text-primary me-3" />
            0338210411
          </p>
          <p className="footerTea mb-2 mb-2">
            <i className="gray-words fa fa-envelope text-primary me-3" />
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
          <a className="footerTea btn btn-link mb-1" href="">
            About Us
          </a>
          <a className="footerTea btn btn-link mb-1" href="">
            Contact Us
          </a>
          <a className="footerTea btn btn-link mb-1" href="">
            Our Services
          </a>
          <a className="footerTea btn btn-link mb-1" href="">
            Terms &amp; Condition
          </a>
          <a className="footerTea btn btn-link mb-1" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Business Hours</h4>
          <p className="footerTea mb-1">Monday - Friday</p>
          <h6 className="mb-2 text-light">09:00 am - 07:00 pm</h6>
          <p className="footerTea mb-1">Saturday</p>
          <h6 className="mb-2 text-light">09:00 am - 12:00 pm</h6>
          <p className="footerTea mb-1">Sunday</p>
          <h6 className="mb-2 text-light">Closed</h6>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-primary mb-4">Newsletter</h4>
          <p className="footerTea mb-1">
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
</>

    )
}
export default Footer;