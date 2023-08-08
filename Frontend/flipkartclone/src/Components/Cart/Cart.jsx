import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";

const style1 = {
  color: "#2874f0",
  borderBottom: "3px solid #2874f0",
};

const style2 = {
  color: "black",
  borderBottom: "none",
};

function Cart() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isGrocery = useSelector((state) => {
    return state.isGrocery;
  });
  useEffect(() => {
    fetch("http://localhost:7000/addtocart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#f1f3f6", padding: "15px 0" }}>
      <div className="cart_page">
        <div className="left_cart">
          <div className="cart_option">
            <button
              onClick={() => {
                dispatch({ type: "GROCERYPAGE", payload: false });
              }}
              style={isGrocery ? style2 : style1}
            >
              Flipkart
            </button>
            <button
              onClick={() => {
                dispatch({ type: "GROCERYPAGE", payload: true });
              }}
              style={isGrocery ? style1 : style2}
            >
              Grocery
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 15px",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "14px" }}>From Saved Addresses</p>
            <button
              style={{
                color: "#2874f0",
                fontSize: "14px",
                border: "1px solid rgb(228, 228, 228)",
                padding: "7px 12px",
                borderRadius: "5px",
              }}
            >
              Enter Delivery Pincode
            </button>
          </div>
          {data.length > 0 ? (
            <div>
              {data?.map((ele) => {
                return <CartProduct data={ele} />;
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="right_cart"></div>
      </div>
    </div>
  );
}

export default Cart;
