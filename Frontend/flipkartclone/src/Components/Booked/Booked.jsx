import "./Booked.css";
import React, { useEffect } from "react";
import BookedItem from "./BookedItem";
import { getCartItem } from "../../Redux/action";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Payment from "./Payment";

function Booked() {
  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);

  const [phoneNo, setPhoneNo] = useState("");
  const [phone, setPhone] = useState("");

  const [addressNo, setAddressNo] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCartItem(setData);
  }, []);
  console.log(data);

  const isPayment = useSelector((state) => {
    return state.isPayment;
  });

  const [price, setPrice] = useState({
    originalPrice: 0,
    discountPrice: 0,
    currentPrice: 0,
  });
  useEffect(() => {
    console.log(data);
    let originalP = data?.reduce((acc, item) => {
      console.log(acc);
      return acc + item.original_price * item.quantity;
    }, 0);
    let discountP = data?.reduce((acc, item) => {
      return acc + (item.original_price - item.current_price) * item.quantity;
    }, 0);
    let currentP = data?.reduce((acc, item) => {
      return acc + item.current_price * item.quantity;
    }, 0);
    console.log(originalP, discountP, currentP);
    setPrice({
      ...price,
      originalPrice: originalP,
      discountPrice: discountP,
      currentPrice: currentP,
    });
    dispatch({
      type: "ITEMPRICE",
      payload: {
        originalPrice: originalP,
        discountPrice: discountP,
        currentPrice: currentP,
      },
    });
  }, [data]);

  const handlephone = () => {
    if (phoneNo.length < 10) {
      alert("Mobile Number is Invalid!");
    } else {
      setPhone(phoneNo);
      setBoolean(true);
    }
  };

  const handleaddress = () => {
    setAddress(addressNo);
    setBoolean2(true);
  };

  const handlepayment = () => {
    if (!phone) {
      alert("Please Enter Mobile Number");
    } else if (!address) {
      alert("Please Enter Delivery Address");
    } else {
      dispatch({ type: "PAYMENT", payload: true });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f1f3f6",
        padding: "15px 0",
        paddingBottom: "100px",
      }}
    >
      <div className="booked_page">
        <div className="left_booked">
          <div
            style={{
              backgroundColor: "white",
              padding: "15px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <button
                  style={{
                    backgroundColor: "rgb(232, 230, 230)",
                    padding: "2px 7px",
                    fontSize: "12px",
                    color: "#2874f0",
                    fontWeight: "600",
                  }}
                >
                  1
                </button>
              </div>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <h1 style={{ color: "grey", fontWeight: "600" }}>LOGIN</h1>
                  <i class="fa-solid fa-check" style={{ color: "#2874f0" }}></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "14px",
                    marginTop: "2px",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{ fontWeight: "600" }}>
                    Kaushal Vishwakarma{" "}
                    {phone && (
                      <span style={{ fontWeight: "400" }}>+91-{phone}</span>
                    )}
                  </h3>
                  &nbsp;
                  {!boolean && (
                    <div style={{ display: "flex", gap: "20px" }}>
                      <div className="input-container6">
                        <input
                          type="text"
                          onChange={(event) => {
                            setPhoneNo(event.target.value);
                          }}
                          className={phoneNo ? "has-content" : ""}
                          maxLength={10}
                        />
                        <label
                          htmlFor="myInput"
                          className={phoneNo ? "has-content" : ""}
                        >
                          Enter Mobile Number
                        </label>
                      </div>
                      <button
                        style={{ color: "#2874f0" }}
                        onClick={handlephone}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setBoolean(false);
                }}
                style={{
                  color: "#2874f0",
                  width: "120px",
                  border: "1px solid rgb(229, 229, 229)",
                  padding: "8px",
                  fontSize: "14px",
                }}
              >
                CHANGE
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "15px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <button
                  style={{
                    backgroundColor: "rgb(232, 230, 230)",
                    padding: "2px 7px",
                    fontSize: "12px",
                    color: "#2874f0",
                    fontWeight: "600",
                  }}
                >
                  2
                </button>
              </div>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <h1 style={{ color: "grey", fontWeight: "600" }}>
                    DELIVERY ADDRESS
                  </h1>
                  <i class="fa-solid fa-check" style={{ color: "#2874f0" }}></i>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    marginTop: "2px",
                  }}
                >
                  <h3 style={{ fontWeight: "600", marginBottom: "20px" }}>
                    Kaushal Vishwakarma
                  </h3>
                  {boolean2 && <p>{address}</p>}
                  {!boolean2 && (
                    <div style={{ display: "flex", gap: "20px" }}>
                      <div className="input-container6">
                        <input
                          type="text"
                          onChange={(event) => {
                            setAddressNo(event.target.value);
                          }}
                          className={addressNo ? "has-content" : ""}
                        />
                        <label
                          htmlFor="myInput"
                          className={addressNo ? "has-content" : ""}
                        >
                          Enter Address
                        </label>
                      </div>
                      <button
                        style={{ color: "#2874f0" }}
                        onClick={handleaddress}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setBoolean2(false);
                }}
                style={{
                  color: "#2874f0",
                  width: "120px",
                  border: "1px solid rgb(229, 229, 229)",
                  padding: "8px",
                  fontSize: "14px",
                }}
              >
                CHANGE
              </button>
            </div>
          </div>
          {!isPayment ? (
            <div
              style={{
                backgroundColor: "#2874f0",
                padding: "15px 20px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "rgb(232, 230, 230)",
                    padding: "2px 7px",
                    fontSize: "12px",
                    color: "#2874f0",
                    fontWeight: "600",
                  }}
                >
                  3
                </button>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <h1 style={{ color: "white", fontWeight: "600" }}>
                  ORDER SUMMARY
                </h1>
                <i class="fa-solid fa-check" style={{ color: "#2874f0" }}></i>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "white",
                padding: "15px 20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <button
                    style={{
                      backgroundColor: "rgb(232, 230, 230)",
                      padding: "2px 7px",
                      fontSize: "12px",
                      color: "#2874f0",
                      fontWeight: "600",
                    }}
                  >
                    3
                  </button>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <h1 style={{ color: "grey", fontWeight: "600" }}>
                      ORDER SUMMARY
                    </h1>
                    <i
                      class="fa-solid fa-check"
                      style={{ color: "#2874f0" }}
                    ></i>
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {data.length} Items
                  </div>
                </div>
              </div>
              <div>
                <button
                  style={{
                    color: "#2874f0",
                    width: "120px",
                    border: "1px solid rgb(229, 229, 229)",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                  onClick={() => {
                    dispatch({ type: "PAYMENT", payload: false });
                  }}
                >
                  CHANGE
                </button>
              </div>
            </div>
          )}
          {!isPayment && data.length > 0 && (
            <div style={{ backgroundColor: "white", marginTop: "-20px" }}>
              {data?.map((ele, i) => {
                return (
                  <BookedItem data={ele} index={i} key={i} setData={setData} />
                );
              })}
            </div>
          )}
          <div
            onClick={handlepayment}
            style={
              !isPayment
                ? {
                    backgroundColor: "white",
                    padding: "15px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                  }
                : {
                    backgroundColor: "#2874f0",
                    padding: "15px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                  }
            }
          >
            <div>
              <button
                style={{
                  backgroundColor: "rgb(232, 230, 230)",
                  padding: "2px 7px",
                  fontSize: "12px",
                  color: "#2874f0",
                  fontWeight: "600",
                }}
              >
                4
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h1
                style={
                  !isPayment
                    ? { color: "grey", fontWeight: "600" }
                    : { color: "white", fontWeight: "600" }
                }
              >
                PAYMENT
              </h1>
            </div>
          </div>
          {isPayment && <Payment price={price.currentPrice} />}
        </div>
        <div>
          <div className="right_booked">
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
                  <h2>Price ({data.length} items)</h2>
                  <p>₹{price.currentPrice}</p>
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
                <h1 style={{ fontSize: "17px" }}>Total Payable</h1>
                <h2 style={{ fontSize: "17px" }}>₹{price.currentPrice}</h2>
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
              Your Total Savings on this order ₹{price.discountPrice}
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
      </div>
    </div>
  );
}

export default Booked;
