import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Slider({ search, banner, title, url }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: banner ? 4.5 : 5.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [data, setData] = useState([]);
  // console.log(search);
  useEffect(() => {
    axios.get(`http://localhost:7000/products?search=${search}`).then((res) => {
      let filterData = res.data.map((ele) => {
        if (ele.name.length <= 15) {
          return ele;
        } else {
          const truncatedText = ele.name.substring(0, 15) + "...";
          // console.log(truncatedText);
          ele.name = truncatedText;
          return ele;
        }
      });
      // console.log(filterData);
      setData(filterData);
    });
  }, []);

  return (
    <div
      style={
        banner
          ? {
              display: "grid",
              gridTemplateColumns: "83% 16%",
              gap: "15px",
              marginTop: "20px",
            }
          : {
              display: "grid",
              gridTemplateColumns: "100% 0%",
              gap: "15px",
              marginTop: "15px",
            }
      }
    >
      <div style={{ padding: "10px 10px 10px 10px", backgroundColor: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            margin: "15px 0",
          }}
        >
          <h1 style={{ fontWeight: "600" }}>{title}</h1>
          <Link to={"/product"}>
            <button>
              <i
                class="fa-solid fa-circle-arrow-right"
                style={{ color: "#2874f0" }}
              ></i>
            </button>
          </Link>
        </div>

        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          centerMode={true}
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
        >
          {data.map((item, i) => {
            return (
              <div
                style={{
                  textAlign: "center",
                  padding: "25px 15px",
                  backgroundColor: "white",
                  border: "1px solid rgb(194, 194, 194)",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={item.thumbnails[0]}
                    alt=""
                    style={{ width: "auto", height: "150px" }}
                  />
                </div>
                <p
                  style={{
                    marginTop: "5px",
                    fontWeight: "100",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ fontWeight: "600" }}>From ₹{item.current_price}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      {banner && (
        <div>
          <img src={url} alt="" height={"150px"} />
        </div>
      )}
    </div>
  );
}

export default Slider;
