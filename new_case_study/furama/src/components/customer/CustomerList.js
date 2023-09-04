import React from "react";
import { useEffect, useState } from "react";
import * as CustomerService from "../../services/CustomerService";
import { Link, useNavigate } from "react-router-dom";
import ModalDelete from "./ModalDelete";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  //search
  const [search, setSearch] = useState("");

  //phân trang
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const loadCustomer = async () => {
    const result = await CustomerService.getCustomerList(page,search);
    setTotalPage(Math.ceil(result.headers["x-total-count"] / 5));
    setCustomers(result.data);
  };

  useEffect(() => {
    loadCustomer();
  }, [page,search]);

  const nextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };
  const previosPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  // delete
  const [modal, SetModal] = useState({
    show: false,
    info: {},
  });
  const deleteConfirm = async (id) => {
    await CustomerService.deleteCustomer(id);
    hideModalDelete();
    loadCustomer();
  };
  const showModalDelete = (customer) => {
    SetModal({
      show: true,
      info: customer,
    });
  };
  const hideModalDelete = () => {
    SetModal({
      show: false,
      info: {},
    });
  };

  // search
  const searchName = () => {
    const search = document.getElementById("search").value;
    setSearch(search);
    setPage(1);
  }



  return (
    <>
      {/* list */}
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-7">
                  <h2>Customer list</h2>
                </div>
                <div className="col-sm-4">
                  <div className="search-box-inline">
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control mr-sm-2"
                      id="search"
                    />
                    <button class="btn btn-primary" type="button" onClick={()=>searchName()}>Search</button>
                  </div>
                </div>
                <div className="col-sm-1">
                  <Link to="/customer/create">
                    <button type="button" className="btn btn-primary">
                      Create
                    </button>
                  </Link>
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
                  <th>Customer Type</th>
                  <th>Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => {
                  return (
                    <tr key={`p_${index}`}>
                      <td>{index + 1}</td>
                      <td>{customer.name}</td>
                      <td>{customer.dob}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.identity}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.customerType.name}</td>
                      <td>{customer.location}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            navigate(`/customer/edit/${customer.id}`);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => showModalDelete(customer)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* //phantrang */}
            <div className="d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => previosPage()}
                      style={{ color: "black" }}
                    >
                      Previous
                    </button>
                  </li>
                  <li className="page-item">
                    <span
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      {page}/{totalPage}
                    </span>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => nextPage()}
                      href="#"
                      style={{ color: "black" }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* // */}
          </div>
        </div>
      </div>
      {/* list */}
      <ModalDelete showModal={modal} hideModal={hideModalDelete} confirm={deleteConfirm} />
    </>
  );
};
export default CustomerList;
