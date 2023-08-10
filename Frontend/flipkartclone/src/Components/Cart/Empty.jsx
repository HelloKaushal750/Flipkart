import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'

function Empty() {
  const navigate = useNavigate();
  const isGrocery = useSelector((state)=>{
    return state.isGrocery
  })
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "white",
        padding: "30px ",
      }}
    >
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/08dddd59-c0ff-4efd-8723-6d847f5df25f.png?q=90"
        alt=""
        style={{ width: "30%", backgroundColor: "white" }}
      />
      <h1 style={{ fontWeight: "600", fontSize: "18px" }}>
        Your Basket is empty!
      </h1>
      <p style={{ fontSize: "12px" }}>Enjoy Upto 50% Savings</p>
      <button
        style={{
          width: "27%",
          backgroundColor: "#2874f0",
          padding: "10px",
          color: "white",
          borderRadius: "2px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
        onClick={() => {
          if(isGrocery){
            navigate('/product/groceries')
          }else{
            navigate("/");
          }
        }}
      >
        Shop now
      </button>
    </div>
  );
}

export default Empty;
