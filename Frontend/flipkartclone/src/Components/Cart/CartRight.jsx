import { useState, useEffect } from "react";
import { getCartItem } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { calculation } from "../../Redux/action";

function CartRight({ data, setData }) {
  const dispatch = useDispatch();
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
      return (
        acc + (item.current_price * item.quantity)
      );
    },0);
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
  return (
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
              <h2>Price ({data.length} items)</h2>
              <p>₹{price.originalPrice}</p>
            </div>
            <div>
              <h2>Discount</h2>
              <p style={{ color: "green" }}>
                - ₹{price.originalPrice - price.currentPrice}
              </p>
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
          You will save ₹{price.originalPrice - price.currentPrice} on this
          order
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
        <i class="fa-solid fa-shield-halved" style={{ fontSize: "25px" }}></i>
        <p style={{ fontSize: "14px", color: "grey", fontWeight: "600" }}>
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </p>
      </div>
    </div>
  );
}

export default CartRight;
