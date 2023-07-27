import { useParams } from "react-router-dom";
import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowProduct from "./ShowProduct";

const arr = [
  "Popularity",
  "Price - Low to High",
  "Price - High to Low",
  "Newest First",
];

function removeRepeatedWord(inputString) {
  const words = inputString.split(" ");
  const newArr = [];
  words.forEach((ele)=>{
    if(!newArr.includes(ele)){
      newArr.push(ele)
    }
  })
  const sentence = newArr.join(" ");
  return sentence;
}

function Product() {
  const { features } = useParams();
  const [btn, setBtn] = useState(1);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/products?search=${features}&sort=${sort}`)
      .then((res) => {
        let filterData = res.data?.map((ele) => {
          const modifiedString = removeRepeatedWord(ele.name);
          if(modifiedString.length>80){
            const truncatedText = modifiedString.substring(0, 80) + "...";
            ele.name = truncatedText;
          }else{
            ele.name = modifiedString;
          }
          return ele;
        });
        setData(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort,data]);

  const handleSorting = (ele)=>{
    if(ele==="Price - Low to High"){
      setSort("asc")
    }else if(ele==="Price - High to Low"){
      setSort("desc")
    }else{
      setSort(null)
    }
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "19% 80.5%",
        backgroundColor: "#f1f3f6",
        borderTop: "2px solid #d0d2d4",
        gap: "10px",
        padding: "8px",
      }}
    >
      <div id="product_left" style={{ backgroundColor: "white" }}></div>
      <div id="product_right" style={{ backgroundColor: "white" }}>
        <h5 style={{ color: "grey", fontSize: "12px" }}>
          Home > {features[0].toUpperCase() + features.slice(1)}
        </h5>
        <h5 style={{ color: "#2874f0", fontSize: "12px", marginTop: "8px" }}>
          {features[0].toUpperCase() + features.slice(1)}
        </h5>
        <h3 style={{ fontWeight: "600", marginTop: "8px" }}>
          Items&nbsp;{" "}
          <span style={{ color: "grey", fontSize: "12px", fontWeight: "400" }}>
            {" "}
            (Showing 1 - 10 products)
          </span>
        </h3>
        <div
          style={{
            display: "flex",
            gap: "17px",
            fontSize: "14px",
            marginTop: "8px",
            alignItems: "baseline",
          }}
        >
          <p style={{ fontWeight: "600" }}>Sort By</p>
          {arr.map((ele, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  handleSorting(ele)
                  setBtn(i + 1);
                }}
                style={
                  btn === i + 1
                    ? {
                        color: "#2874f0",
                        borderBottom: "2px solid #2874f0",
                        paddingBottom: "5px",
                      }
                    : null
                }
              >
                {ele}
              </button>
            );
          })}
        </div>
        {data.length > 0 ? (
          <ShowProduct data={data} />
        ) : (
          "No Product Available!"
        )}
      </div>
    </div>
  );
}

export default Product;
