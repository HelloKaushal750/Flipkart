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
  words.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });
  const sentence = newArr.join(" ");
  return sentence;
}

function Product() {
  const { features } = useParams();
  const [btn, setBtn] = useState(1);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([])
  const [sort, setSort] = useState(null);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:7000/products?search=${features}&sort=${sort}`)
      .then((res) => {
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
        setData(filterData);
        setOriginalData(filterData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort, features]);

  const handleSorting = (ele, i) => {
    if (ele === "Price - Low to High") {
      setSort("asc");
    } else if (ele === "Price - High to Low") {
      setSort("desc");
    } else {
      setSort(null);
    }
    setBtn(i + 1);
  };

  const handleCheckboxChange4 = (event) => {
    setIsChecked4(event.target.checked);
    if(!isChecked4){
      let ratedData = originalData.filter((item)=>{
        return item.rating>=4
      })
      setData(ratedData);
    }else{
      setData(originalData)
    }
  };
  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
    if(!isChecked3){
      let ratedData = originalData.filter((item)=>{
        return item.rating>=3
      })
      setData(ratedData);
    }else{
      setData(originalData)
    }
  };
  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
    if(!isChecked2){
      let ratedData = originalData.filter((item)=>{
        return item.rating>=2
      })
      setData(ratedData);
    }else{
      setData(originalData)
    }
  };
  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
    if(!isChecked1){
      let ratedData = originalData.filter((item)=>{
        return item.rating>=1
      })
      setData(ratedData);
    }else{
      setData(originalData)
    }
  };

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
      <div id="product_left" style={{ backgroundColor: "white" }}>
        <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Filters</h1>
        <hr style={{ margin: "15px 0" }} />
        <h1 style={{ fontSize: "13px", marginBottom: "10px", fontWeight:"600" }}>
          CUSTOMER RATINGS
        </h1>
        <div
          style={{
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          className="rating_filter"
        >
          <div className="checkbox_div">
            <input
              type="checkbox"
              checked={isChecked4}
              onChange={handleCheckboxChange4}
            />{" "}
            4 <i class="fa-solid fa-star"></i> & above
          </div>
          <div>
            <input
              type="checkbox"
              checked={isChecked3}
              onChange={handleCheckboxChange3}
            />{" "}
            3 <i class="fa-solid fa-star"></i> & above
          </div>
          <div>
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
            />{" "}
            2 <i class="fa-solid fa-star"></i> & above
          </div>
          <div>
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckboxChange1}
            />{" "}
            1 <i class="fa-solid fa-star"></i> & above
          </div>
        </div>
        <div style={{marginTop:"50px"}}>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/cb34acb8965c0c5e.jpg?q=20" alt="" />
        </div>
      </div>
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
                  handleSorting(ele, i);
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
