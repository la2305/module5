import React from "react";
const CustomerList = () => {
    return(
        <>
  {/* list */}
  <div className="container">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8">
              <h2>Customer list</h2>
            </div>
            <div className="col-sm-4">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>Identity Card Number</th>
              <th>Number Phone</th>
              <th>Email</th>
              <th>Customer Type</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>24/05/1998</td>
              <td>Male</td>
              <td>049096000697</td>
              <td>03382101411</td>
              <td>lequangphuoc2305@gmail.com</td>
              <td>Gold</td>
              <td>536/17A Điện Biên Phủ, Đà Nẵng,</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip">
                  <i className="fa-solid fa-circle-info" />
                </a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="fa-solid fa-trash" />
                </a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>24/05/1998</td>
              <td>Male</td>
              <td>049096000697</td>
              <td>03382101411</td>
              <td>lequangphuoc2305@gmail.com</td>
              <td>Gold</td>
              <td>536/17A Điện Biên Phủ, Đà Nẵng,</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip">
                  <i className="fa-solid fa-circle-info" />
                </a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="fa-solid fa-trash" />
                </a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>24/05/1998</td>
              <td>Male</td>
              <td>049096000697</td>
              <td>03382101411</td>
              <td>lequangphuoc2305@gmail.com</td>
              <td>Gold</td>
              <td>536/17A Điện Biên Phủ, Đà Nẵng,</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip">
                  <i className="fa-solid fa-circle-info" />
                </a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="fa-solid fa-trash" />
                </a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>24/05/1998</td>
              <td>Male</td>
              <td>049096000697</td>
              <td>03382101411</td>
              <td>lequangphuoc2305@gmail.com</td>
              <td>Gold</td>
              <td>536/17A Điện Biên Phủ, Đà Nẵng,</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip">
                  <i className="fa-solid fa-circle-info" />
                </a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
                <a
                  href="#"
                  className="delete"
                  title="Delete"
                  data-toggle="tooltip"
                >
                  <i className="fa-solid fa-trash" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">
                <i className="fa fa-angle-double-left" />
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="fa fa-angle-double-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* list */}
</>

    );
};
export default CustomerList