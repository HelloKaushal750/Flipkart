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
          const truncatedText = modifiedString.substring(0, 80);
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
        second:
          filterData[0].name[0].toUpperCase() + filterData[0].name.slice(1, 15),
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
                {link.first}&nbsp; > &nbsp;{link.second}...
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
          <div
            style={{
              marginTop: "-8px",
              display: "flex",
              alignItems: "baseline",
              gap: "15px",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>₹{data.current_price}</h1>
            <h3 style={{ color: "grey", textDecoration: "line-through" }}>
              ₹{data.original_price}
            </h3>
            <h3 style={{ color: "green" }}>{data.discount_percent}% off</h3>
            <div>
              <i
                class="fa-solid fa-circle-info"
                style={{
                  color: "white",
                  backgroundColor: "rgb(198, 197, 197)",
                  borderRadius: "50%",
                  border: "2px solid rgb(198, 197, 197)",
                  fontSize: "12px",
                }}
              ></i>
            </div>
          </div>
          <div>
            <div>
              <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                Avaliable offers
              </h1>
            </div>
            {data.offers ? (
              <div>
                {data.offers.map((ele) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        alignItems: "baseline",
                        marginTop: "10px",
                      }}
                    >
                      <i
                        class="fa-solid fa-tag"
                        style={{ color: "#13bd46" }}
                      ></i>
                      <h3>
                        <span style={{ fontWeight: "600" }}>
                          {ele.split(":")[0]}
                        </span>{" "}
                        {ele.split(":")[1]}
                      </h3>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h3 style={{ color: "red" }}>No offer available!</h3>
              </div>
            )}
          </div>
          <div style={{ width: "50%", marginTop: "20px", fontSize: "14px" }}>
            <div
              style={{
                border: "1px solid rgb(198, 197, 197)",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#f5faff",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <input type="radio" checked />
                <h3>Buy without Exchange</h3>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", fontSize: "15px" }}>
                  ₹{data.current_price}
                </h3>
              </div>
            </div>
            <div
              style={{
                border: "1px solid rgb(198, 197, 197)",
                borderTop: "none",
                cursor: "no-drop",
              }}
            >
              <div
                style={{
                  padding: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "grey",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <input type="radio" style={{ cursor: "no-drop" }} />
                  <h3>Buy with Exchange</h3>
                </div>
                <div>
                  <h3>up to ₹{data.current_price * (0.95).toFixed(1)} off</h3>
                </div>
              </div>
              <div>
                <h3
                  style={{
                    marginLeft: "48px",
                    marginTop: "-8px",
                    marginBottom: "20px",
                    color: "red",
                  }}
                >
                  Enter pincode to check if exchange is available
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                width: "80px",
                border: "1px solid rgb(234, 232, 232)",
                padding: "2px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://rukminim2.flixcart.com/image/160/160/cms-brand/e5e7f2f1c25176753af9c4390b9c0124712a01145d504876f32d2cac02b69eec.jpg?q=90"
                alt=""
                style={{ height: "80%" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>1 Year Brand Warranty</p>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                gap: "42px",
                marginTop: "15px",
                fontSize: "14px"
              }}
            >
              <div>
                <h3 style={{ color: "grey", fontWeight: "600" }}>Highlights</h3>
              </div>
              <div>
                {data.highlights ? (
                  <ul style={{marginTop:"-8px"}}>
                    {data.highlights?.map((ele) => {
                      return (
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom:"-5px"
                          }}
                        >
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", gap: "68px", marginTop: "20px" }}>
              <div>
                <h3 style={{ color: "grey", fontWeight: "600" }}>Seller</h3>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <h3 style={{ fontSize: "15px", color: "#2874f0" }}>
                  Vision Star
                </h3>

                <button
                  style={{
                    color: "white",
                    backgroundColor: "#2874f0",
                    width: "40px",
                    height: "20px",
                    fontSize: "10px",
                    borderRadius: "10px",
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
