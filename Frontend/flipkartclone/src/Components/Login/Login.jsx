import { useState } from "react";
import "./Login.css";
import {useDispatch} from 'react-redux'
import { Cursor } from "mongoose";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const loginData = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch()
  const handleSignup = ()=>{
    dispatch({type:"LOGINPAGE",payload:false})
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  return (
    <div className="login_container">
      <div>
        <div class="input-container">
          <input
            value={inputValue}
            onChange={handleInputChange}
            className={inputValue ? "has-content" : ""}
            type="email"
            id="myInput"
          />
          <label for="myInput" className={inputValue ? "has-content" : ""}>
            Enter Email
          </label>
        </div>
        <div class="input-container2">
          <input
            value={inputValue2}
            onChange={handleInputChange2}
            className={inputValue2 ? "has-content2" : ""}
            type="password"
            id="myInput2"
          />
          <label for="myInput2" className={inputValue2 ? "has-content2" : ""}>
            Enter Password
          </label>
        </div>

        <div style={{ fontSize: "11.8px", marginTop: "30px" }}>
          <p style={{ color: "#979797" }}>
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "#2874f0" }}>Terms of Use</span> and{" "}
            <span style={{ color: "#2874f0" }}>Privacy Policy.</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "15px",
            marginTop: "15px",
          }}
        >
          <button className="btn_continue">
            LOGIN
          </button>
        </div>
      </div>
      <div
      onClick={handleSignup}
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "14px",
          color: "#2874f0",
          fontWeight: "600",
          marginBottom:"10px",
          cursor:"pointer"
        }}
      >
        <h1>New to Flipkart? Create an account</h1>
      </div>
    </div>
  );
}

export default Login;
