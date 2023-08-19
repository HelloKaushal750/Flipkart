import { useEffect, useState } from "react";

import "./OrderItem.css";

function OrderItem({ item, delivered }) {
  const [color, setColor] = useState("Black");

  useEffect(() => {
    item.specs[0].details.forEach((ele) => {
      if (ele.property === "Color") {
        setColor(ele.value);
      }
    });
  }, [color]);
  return (
    <div className="orderitem_page">
      <div style={{ height: "90px", padding: "8px", marginLeft: "20px" }}>
        <img src={item.thumbnails} alt="" style={{ height: "100%" }} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ fontSize: "14px", marginBottom: "10px" }}>{item.name}</h1>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Color:{" "}
          {color}
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: "14px" }}>₹{item.current_price}</h1>
      </div>
      <div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i
            class="fa-solid fa-circle"
            style={{ color: "rgb(3, 180, 3)", fontSize: "10px" }}
          ></i>{" "}
          {delivered}
        </p>
        <p style={{ fontSize: "13px", marginTop: "5px" }}>
          Your item has been delivered
        </p>
        <p
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#2874f0",
            marginTop: "5px",
          }}
        >
          <i class="fa-solid fa-star" style={{ fontSize: "14px" }}></i> Rate &
          Review Product
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
