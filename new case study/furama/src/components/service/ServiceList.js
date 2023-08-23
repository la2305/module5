import React from "react";
const ServiceList = () => {
  return (
    <>
      {/* service */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722781/722781/63984554_XL.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">LAGOON SUPERIOR</h5>
                <p className="card-text">Room area: 40.1 m2</p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-872x563.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">DELUXE ROOM FACING THE SEA</h5>
                <p className="card-text">Room area: 43.7 m2</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M-1047x563.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">SUPERIOR ROOM FACING THE LAKE</h5>
                <p className="card-text">Room area: 40.1 m2</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="height-image card-img-top"
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-872x563.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">DELUXE ROOM FACING THE GARDEN</h5>
                <p className="card-text">Room area: 40.1 m2.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service */}
    </>
  );    
};
export default ServiceList;
