import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.css";

function removeRepeatedWord(inputString) {
  const words = inputString.split(" ");
  const newArr = [];
  words.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });
  const sentence = newArr.join(" ");
  return sentence;
}

function ProductDetail() {
  const [data, setData] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7000/products/${productId}`).then((res) => {
      let filterData = res.data?.map((ele) => {
        const modifiedString = removeRepeatedWord(ele.name);
        if (modifiedString.length > 80) {
          const truncatedText = modifiedString.substring(0, 80) + "...";
          ele.name = truncatedText;
        } else {
          ele.name = modifiedString;
        }
        return ele;
      });
      setData(filterData[0]);
    });
  }, []);
  console.log(data);

  return (
    <div className="productDetail">
      <div style={{display:"grid",gridTemplateColumns:"35% 65%",padding:"10px 10px 10px 60px",backgroundColor:"white"}}>
        <div className="left_productdetail">
          <div className="image_container">
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button className="love_btn">
                <i
                  class="fa-solid fa-heart"
                  style={{ color: "rgb(198, 197, 197)" }}
                ></i>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                margin: "40px 60px",
              }}
            >
              <img src={data.thumbnails} alt="" style={{ height: "100%" }} />
            </div>
          </div>
          <div className="buy-cart-btn-div">
            <button style={{backgroundColor:"#ff9f00"}}>
              <i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp; ADD TO CART
            </button>
            <button style={{backgroundColor:"#fb641b"}}>
              <i class="fa-solid fa-bolt-lightning"></i>&nbsp;&nbsp; BUY NOW
            </button>
          </div>
        </div>
        <div className="right_productdetail"></div>
      </div>
    </div>
  );
}

export default ProductDetail;
