import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.css";

function removeRepeatedWord(inputString) {
  const words = inputString.split(" ");
  const newArr = [];
  words.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });
  const sentence = newArr.join(" ");
  return sentence;
}

function ProductDetail() {
  const [data, setData] = useState({});
  const [link, setLink] = useState({
    first: "",
    second: "",
  });
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7000/products/${productId}`).then((res) => {
      let filterData = res.data?.map((ele) => {
        const modifiedString = removeRepeatedWord(ele.name);
        if (modifiedString.length > 80) {
          const truncatedText = modifiedString.substring(0, 80) + "...";
          ele.name = truncatedText;
        } else {
          ele.name = modifiedString;
        }
        return ele;
      });
      setLink({
        first:
          filterData[0].category[0].toUpperCase() +
          filterData[0].category.slice(1),
        second: filterData[0].name[0].toUpperCase() + filterData[0].name.slice(1, 15),
      });
      setData(filterData[0]);
    });
  }, []);
  console.log(data);

  return (
    <div className="productDetail">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "35% 65%",
          padding: "10px 10px 10px 60px",
          backgroundColor: "white",
        }}
      >
        <div className="left_productdetail">
          <div className="image_container">
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button className="love_btn">
                <i
                  class="fa-solid fa-heart"
                  style={{ color: "rgb(198, 197, 197)" }}
                ></i>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                margin: "40px 60px",
              }}
            >
              <img src={data.thumbnails} alt="" style={{ height: "100%" }} />
            </div>
          </div>
          <div className="buy-cart-btn-div">
            <button style={{ backgroundColor: "#ff9f00" }}>
              <i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp; ADD TO CART
            </button>
            <button style={{ backgroundColor: "#fb641b" }}>
              <i class="fa-solid fa-bolt-lightning"></i>&nbsp;&nbsp; BUY NOW
            </button>
          </div>
        </div>
        <div className="right_productdetail">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ color: "grey", fontSize: "12px" }}>
                Home&nbsp; > &nbsp; 
                {link.first}&nbsp; > 
                &nbsp;{link.second}...
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "30px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <input
                  type="checkbox"
                  style={{ color: "rgb(198, 197, 197)" }}
                />{" "}
                Compare
              </div>
              <div>
                <i
                  class="fa-solid fa-share"
                  style={{ color: "rgb(198, 197, 197)" }}
                ></i>
                &nbsp;&nbsp;Share
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "18px" }}>{data.name}</h1>
          </div>
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <button
              style={{
                color: "white",
                backgroundColor: "#388e3c",
                width: "40px",
                height: "20px",
                fontSize: "10px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "600",
              }}
            >
              {data.rating}&nbsp;
              <i
                class="fa-solid fa-star"
                style={{ fontSize: "9px", marginTop: "-3px" }}
              ></i>
            </button>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
              style={{ width: "10%" }}
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            <h3 style={{ color: "green", fontSize: "14px" }}>
              Extra ₹{data.original_price - data.current_price} off
            </h3>
          </div>
          <div>
            <h1>₹{data.current_price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
