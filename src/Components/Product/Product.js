import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProudctDetails/ProductDetails";
import "../../App.css";
import { SelectedCat } from "./../../App";

export const fakeData = [
  {
    id: 1,
    name: "card1",
    description:
      "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    taka: 40,
    img: "https://static-01.daraz.com.bd/p/d9e7e0b747c588aaf541f7b6153f4286.jpg",
    color: "pink",
    cat: "shirt",
  },
  {
    id: 2,
    name: "card2",
    description:
      "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    taka: 50,
    img: "https://static-01.daraz.com.bd/p/82a62a3abcae5cf6da39865bbb260e23.jpg",
    color: "orange",
    cat: "pant",
  },
  {
    id: 3,
    name: "card3",
    description:
      "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    taka: 60,
    img: "https://static-01.daraz.com.bd/p/2cda556eb2d2821a968922cd779673fb.jpg",
    color: "white",
    cat: "shirt",
  },
  {
    id: 4,
    name: "card4",
    taka: 70,
    description:
      "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    img: "https://static-01.daraz.com.bd/p/d30d3f4f8c234bb01dbf7169324d055b.jpg",
    color: "black",
    cat: "pant",
  },
  {
    id: 5,
    name: "card5",
    taka: 80,
    description:
      "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    img: "https://static-01.daraz.com.bd/p/mdc/5aa968abbd75291bb26bc64aaa7dea91.jpg",
    color: "yellow",
    cat: "shirt",
  },
  {
    id: 6,
    name: "card6",
    taka: 90,
    description:
      "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    img: "https://static-01.daraz.com.bd/original/b80aadadbaadbc1db27e692a5e6db52d.jpg",
    color: "green",
    cat: "pant",
  },
  {
    id: 7,
    name: "card7",
    taka: 100,
    description:
      "7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos sed ut fuga pariatur rerum molestiae officiis reprehenderit quaerat modi numquam error facilis atque eius laudantium praesentium, quas debitis accusantium laboriosam quos magni ad exercitationem. Facere, repudiandae minima. Voluptatibus ipsum odio quae ad, earum dignissimos repellendus excepturi? ",
    img: "https://static-01.daraz.com.bd/p/mdc/cabe7db2202d82f9262461981b063408.jpg",
    color: "red",
    cat: "lungi",
  },
];

const Product = () => {
  const [datas, setDatas] = useState(fakeData);
  const [selectedCategori, setSelectedCategori] = useContext(SelectedCat);

  const handleCat = (categoris) => {
    setSelectedCategori(categoris);
  };

  return (
    <div className="card-group">
      {datas.map((data) => (
        <Link
          key={data.id}
          to={"/singleProduct/" + data?.id}
          onClick={() => handleCat(data?.cat)}
        >
          <div className="card m-5" style={{ border: "1px solid black" }}>
            <div className="card-body">
              <h5 className="card-title">id: {data?.id}</h5>
              <p className="card-text">name: {data?.name}</p>
            </div>
            <h1 style={{ color: "red" }}>tk: {data?.taka}</h1>
          </div>
        </Link>
      ))}
      {/* <ProductDetails electedCategori={electedCategori} /> */}
    </div>
  );
};

export default Product;
