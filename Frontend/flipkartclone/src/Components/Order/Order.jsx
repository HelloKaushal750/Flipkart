import { orderItem } from "../../Redux/action";
import { useEffect, useState } from "react";
import "./Order.css";
import { delivered } from "../../constant/data";
import OrderItem from "./OrderItem";

function Order() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    orderItem(setData, search);
  }, [search]);
  console.log(data);
  return (
    <div style={{ backgroundColor: "#f1f3f6", padding: "30px 15px" }}>
      <p style={{ color: "grey", fontSize: "12px", marginLeft: "10px" }}>
        Home&nbsp; > &nbsp;My Account&nbsp; > &nbsp;My Orders
      </p>
      <div className="order_page">
        <div className="left_orderpage">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "600",
              borderBottom: "1px solid #f1f3f6",
              paddingBottom: "5px",
            }}
          >
            Filters
          </h1>
          <div>
            <h2 style={{ padding: "10px 0", fontSize: "14px" }}>
              ORDER STATUS
            </h2>
            <div className="orderstatus">
              <div>
                <input type="checkbox" /> On the way
              </div>
              <div>
                <input type="checkbox" /> Delivered
              </div>
              <div>
                <input type="checkbox" /> Cancelled
              </div>
              <div>
                <input type="checkbox" /> Returned
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <h2 style={{ padding: "10px 0", fontSize: "14px" }}>ORDER TIME</h2>
            <div className="orderstatus">
              <div>
                <input type="checkbox" /> Last 30 days
              </div>
              <div>
                <input type="checkbox" /> 2022
              </div>
              <div>
                <input type="checkbox" /> 2021
              </div>
              <div>
                <input type="checkbox" /> 2020
              </div>
              <div>
                <input type="checkbox" /> 2019
              </div>
              <div>
                <input type="checkbox" /> Older
              </div>
            </div>
          </div>
        </div>
        <div className="right_orderpage">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search your orders here"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i> Search Orders
            </button>
          </div>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {data.length > 0 ? (
              data?.map((item, i) => {
                return <OrderItem item={item} delivered={delivered[i]} />;
              })
            ) : (
              <p>No Order Found!</p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button
              style={{
                color: "#2874f0",
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "0",
                border: "1px solid rgb(215, 214, 214)",
              }}
            >
              No More Results To Display
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
