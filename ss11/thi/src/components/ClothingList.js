import { useEffect, useState } from "react";
import * as ClothingService from "../service/ClothingService";
import { useNavigate } from "react-router-dom";

const ClothingList = () => {
  const [clothings, setClothings] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  //phân trang  
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const loadClothing = async () => {
    const result = await ClothingService.getClothingList(page,search);
    setTotalPage(result.data.totalPages);
    setClothings(result.data.content);
  };

  useEffect(() => {
    loadClothing();
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

  const deleteClothing = async (id) =>{
    await ClothingService.deleteClothing(id);
    loadClothing();
  }
  const searchName =() =>{
    const search = document.getElementById("search").value;
    setSearch(search);
  }

  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-7">
                  <h2>ClothingList</h2>
                </div>
                <div className="col-sm-4">
                  <div className="search-box-inline">
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control mr-sm-2"
                      id="search"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => searchName()}
                    >
                    Search
                    </button>
                  </div>
                </div>
                <div className="col-sm-1">
                  <a to="/create">
                    <button className="btn btn-primary" type="button" onClick={()=>navigate('/create')}>
                      Create
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code Product</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Type</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {clothings.map((clothing, index) => {
                  return (
                    <tr key={`p_${index}`}>
                      <td>{index + 1}</td>
                      <td>{clothing.code}</td>
                      <td>{clothing.name}</td>
                      <td>{clothing.date}</td>
                      <td>{clothing.quantity}</td>
                      <td>{clothing.type.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            navigate(`/edit/${clothing.id}`);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-danger" onClick={()=>deleteClothing(clothing.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* /* //phantrang */}
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
    </>
  );
};
export default ClothingList;
