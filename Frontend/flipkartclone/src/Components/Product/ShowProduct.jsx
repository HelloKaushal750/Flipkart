import { Link } from "react-router-dom";

function ShowProduct({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item) => {
        return (
          <Link to={`/${item._id}`}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "20% 50% 30%",
                borderTop: "1px solid #d7d7d7",
              }}
            >
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "50px",
                }}
              >
                <div>
                  <i
                    class="fa-solid fa-rectangle-ad"
                    style={{ color: "#d7d7d7", fontSize: "25px" }}
                  ></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    marginTop: "-5px",
                    marginBottom: "2px",
                  }}
                >
                  <i class="fa-solid fa-heart" style={{ color: "#d7d7d7" }}></i>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "top",
                    height: "180px",
                  }}
                >
                  <img
                    src={item.thumbnails[0]}
                    alt=""
                    style={{ height: "80%" }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "10px",
                  paddingTop: "24px",
                }}
              >
                <h1 style={{ fontWeight: "600", fontSize: "18px" }}>
                  {item.name}
                </h1>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#388e3c",
                    width: "40px",
                    height: "20px",
                    fontSize: "10px",
                    borderRadius: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                  }}
                >
                  {item.rating}&nbsp;
                  <i
                    class="fa-solid fa-star"
                    style={{ fontSize: "9px", marginTop: "-3px" }}
                  ></i>
                </button>
                <ul
                  style={{
                    paddingLeft: "15px",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  {item.highlights?.map((ele, i) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </div>
              <div style={{ padding: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    marginTop: "10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
                    ₹{item.current_price}
                  </h1>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                    style={{ width: "40%", height: "80%" }}
                  />
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <h2 style={{ textDecoration: "line-through", color: "grey" }}>
                    ₹{item.original_price}{" "}
                  </h2>
                  <span style={{ color: "#388e3c", fontSize: "14px" }}>
                    {item.discount_percent}% off
                  </span>
                </div>
                <p style={{ fontSize: "12px" }}>Free Delivery</p>
                {item.in_stock ? (
                  <p style={{ color: "#388e3c", fontSize: "14px" }}>
                    Available
                  </p>
                ) : (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    Not Available!
                  </p>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ShowProduct;
