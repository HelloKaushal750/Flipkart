import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Empty from "./Empty";
import { getCartItem } from "../../Redux/action";
import { getSavedItem } from "../../Redux/action";
import SavedItem from "./SavedItem";
import CartRight from "./CartRight";
import { useNavigate } from "react-router-dom";

const style1 = {
  color: "#2874f0",
  borderBottom: "3px solid #2874f0",
};

const style2 = {
  color: "black",
  borderBottom: "none",
};

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const dispatch = useDispatch();
  const isGrocery = useSelector((state) => {
    return state.isGrocery;
  });
  useEffect(() => {
    getCartItem(setData);
    getSavedItem(setSavedData);
  }, []);

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
            {!isGrocery && (
              <div
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                  backgroundColor: "white",
                  marginTop: "-17px",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <button
                  style={{
                    width: "30%",
                    backgroundColor: "#fb641b",
                    padding: "14px",
                    color: "white",
                    borderRadius: "2px",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                  onClick={()=>{navigate('/bookingpage')}}
                >
                  PLACE ORDER
                </button>
              </div>
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
        {data.length > 0 && <CartRight data={data} setData={setData} />}
      </div>
    </div>
  );
}

export default Cart;
