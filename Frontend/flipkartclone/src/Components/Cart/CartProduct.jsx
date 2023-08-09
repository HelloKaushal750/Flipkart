import "./CartProduct.css";
import { useState } from "react";
import { delivery } from "../../constant/data";

function CartProduct({ data, index }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart_product_page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            height: "120px",
            padding: "10px",
          }}
        >
          <img src={data.thumbnails} alt="" style={{ height: "100%" }} />
        </div>
        <div className="quantity_btn">
          <button className="inc_dec_btn">-</button>
          <button className="display_quantity">{quantity}</button>
          <button className="inc_dec_btn">+</button>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "16px" }}>{data.name}</h3>
        <p style={{ fontSize: "14px" }}>
          {delivery[index] ? delivery[index] : "Delivery by Sun Aug 20"} |{" "}
          <span style={{ color: "green" }}>Free</span>{" "}
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            ₹40
          </span>
        </p>
        {data.specs?.map((ele) => {
          if (ele.title === "General") {
            return ele.details?.map((item) => {
              if (item.property === "Color") {
                return (
                  <p style={{ color: "grey", fontSize: "14px" }}>
                    {item.value}
                  </p>
                );
              }
            });
          }
        })}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          <p style={{ fontSize: "14px", color: "grey" }}>
            Seller: {data.seller.seller_name}
          </p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            style={{ width: "8%" }}
            alt=""
          />
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px",marginTop:"10px" }}>
          <p
            style={{
              textDecoration: "line-through",
              color: "grey",
              fontSize: "14px",
            }}
          >
            ₹{data.original_price}
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
            ₹{data.current_price}
          </h3>
          <p style={{ color: "green", fontSize: "14px" }}>
            {data.discount_percent}% Off
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {data.offers.length > 0 && (
              <p style={{ color: "green", fontSize: "14px" }}>
                {data.offers.length} offers applied
              </p>
            )}
            <i
              class="fa-solid fa-circle-info"
              style={{ color: "green", fontSize: "14px" }}
            ></i>
          </div>
        </div>
        <div className="remove_btn_div" style={{marginTop:"10px" }}>
          <button>SAVE FOR LATER</button>
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
