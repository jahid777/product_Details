import React from "react";
import { Link, useParams } from "react-router-dom";
import { fakeData } from "./../Product/Product";

const ProductDetails = () => {
  const { singleProductId } = useParams();

  const productDetl = fakeData.find(
    (data) => data.id === parseInt(singleProductId)
  );

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img
              src={productDetl.img}
              sytle={{ height: "50px", width: "50px" }}
              alt=""
            />
          </div>

          <h1>Description: {productDetl.description}</h1>
          <h2 style={{ color: "red", fontWeight: "bold", marginTop: "50px" }}>
            Taka: {productDetl.taka}
          </h2>
        </div>
        <div className="col-md-6">
          <div className="card-group">
            {fakeData.map((data) => (
              <Link key={data.id} to={"/singleProduct/" + data?.id}>
                <div
                  className="card m-5"
                  style={{ border: "1px solid black" }}
                  // onClick={() => singleProduct(data)}
                >
                  <div className="card-body">
                    <h5 className="card-title">{data.id}</h5>
                    <p className="card-text">{data.name}</p>
                  </div>
                  <h1 style={{ color: "red" }}>tk {data.taka}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
