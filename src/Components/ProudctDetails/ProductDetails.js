import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fakeData } from "./../Product/Product";
import { SelectedCat } from "./../../App";

const ProductDetails = () => {
  const [selectedCategori, setSelectedCategori] = useContext(SelectedCat);
  const { singleProductId } = useParams();

  const clickedCat = fakeData.filter(
    (slData) => slData.cat === selectedCategori
  );

  console.log(clickedCat);

  const productDetl = fakeData.find(
    (data) => data.id === parseInt(singleProductId)
  );

  // const getLocalStorageCartData = () => {
  //   let cartData;

  //   const localData = JSON.parse(localStorage.getItem("product")) || [];
  //   cartData = localData;

  //   return cartData;
  // };

  // const [localStroge, setLocalStroge] = useState(getLocalStorageCartData());

  // //seeting the data
  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(selectedCategori || []));
  // }, []);

  // useEffect(() => {
  //   setSelectedCategori(localStroge);
  // }, [productDetl]);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img className="imgStyle" src={productDetl?.img} alt="" />
          </div>

          <h1>Description: {productDetl?.description}</h1>
          <h2 style={{ color: "red", fontWeight: "bold", marginTop: "50px" }}>
            Taka: {productDetl?.taka}
          </h2>
        </div>
        <div className="col-md-6">
          <div className="card-group">
            {clickedCat.map((data) => (
              <Link key={data.id} to={"/singleProduct/" + data?.id}>
                <div
                  className="card m-5"
                  style={{ border: "1px solid black" }}
                  // onClick={() => singleProduct(data)}
                >
                  <div className="card-body">
                    <img className="imgStyle" src={data.img} alt="" />
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
