import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Empty from "./Empty";
import { getCartItem } from "../../Redux/action";
import { getSavedItem } from "../../Redux/action";
import SavedItem from "./SavedItem";

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
  const [savedData, setSavedData] = useState([]);
  // const [price, setPrice] = useState({
  //   originalPrice: data.original_price,
  //   currentPrice: data.current_price,
  //   quantity: data.quantity,
  // });
  const dispatch = useDispatch();
  const isGrocery = useSelector((state) => {
    return state.isGrocery;
  });
  useEffect(() => {
    getCartItem(setData);
    getSavedItem(setSavedData);
  }, []);
  console.log(savedData);
  return (
    <div
      style={{
        backgroundColor: "#f1f3f6",
        padding: "15px 0",
        paddingBottom: "100px",
      }}
    >
      <div className="cart_page">
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div className="left_cart">
            <div className="cart_option">
              <button
                onClick={() => {
                  dispatch({ type: "GROCERYPAGE", payload: false });
                }}
                style={isGrocery ? style2 : style1}
              >
                Flipkart{data.length > 0 && ` (${data.length})`}
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
            {!isGrocery ? (
              data.length > 0 ? (
                <div style={{ backgroundColor: "white" }}>
                  {data?.map((ele, i) => {
                    return (
                      <CartProduct
                        data={ele}
                        index={i}
                        key={i}
                        setData={setData}
                        setSavedData={setSavedData}
                        btnheading={"SAVE FOR LATER"}
                      />
                    );
                  })}
                </div>
              ) : (
                <Empty />
              )
            ) : (
              <Empty />
            )}
          </div>
          {savedData.length > 0 && (
            <div
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                borderRadius: "5px",
              }}
            >
              <div style={{ backgroundColor: "white", padding: "15px 20px" }}>
                <h1 style={{ fontWeight: "600", fontSize: "15px" }}>
                  Saved For Later{" "}
                  {savedData.length > 0 && `(${savedData.length})`}
                </h1>
              </div>
              <div style={{ backgroundColor: "white" }}>
                {savedData?.map((ele, i) => {
                  return (
                    <SavedItem
                      data={ele}
                      index={i}
                      key={i}
                      setData={setData}
                      setSavedData={setSavedData}
                      btnheading={"MOVE TO CART"}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {data.length > 0 && (
          <div>
            <div className="right_cart">
              <div
                style={{
                  padding: "15px 20px",
                  fontWeight: "600",
                  color: "grey",
                  borderBottom: "1px solid rgb(229, 229, 229)",
                }}
              >
                <h1>PRICE DETAILS</h1>
              </div>
              <div style={{ padding: "20px" }}>
                <div
                  className="price_cart"
                  style={{ borderBottom: "1px solid rgb(229, 229, 229)" }}
                >
                  <div>
                    <h2>Price</h2>
                    <p>₹8000</p>
                  </div>
                  <div>
                    <h2>Discount</h2>
                    <p style={{ color: "green" }}>- ₹2000</p>
                  </div>
                  <div>
                    <h2>Delivery Charges</h2>
                    <p style={{ color: "green" }}>Free</p>
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid rgb(229, 229, 229)",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 0",
                    fontWeight: "600",
                  }}
                >
                  <h1 style={{ fontSize: "17px" }}>Total Amount</h1>
                  <h2 style={{ fontSize: "17px" }}>₹6000</h2>
                </div>
              </div>
              <h3
                style={{
                  padding: "0 20px",
                  color: "green",
                  fontWeight: "600",
                  marginTop: "-10px",
                }}
              >
                You will save ₹2000 on this order
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "15px",
                marginTop: "10px",
                alignItems: "center",
                color: "grey",
              }}
            >
              <i
                class="fa-solid fa-shield-halved"
                style={{ fontSize: "25px" }}
              ></i>
              <p style={{ fontSize: "14px", color: "grey", fontWeight: "600" }}>
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
