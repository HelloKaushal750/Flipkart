import "./Signup.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";

function Signup() {
  const isLogin = useSelector((state) => {
    return state.showLogin;
  });
  return (
    <div className="main_signup">
      <div className="left_signup">
        <div>
          {!isLogin ? <h1>Looks like you're new here!</h1> : <h1>Login</h1>}
          {!isLogin ? (
            <h3>Sign up with your mobile number to get started</h3>
          ) : (
            <h3>Get access to your Orders, Wishlist and Recommendations</h3>
          )}
        </div>
        <div>
          <img src="https://www.bingocycles.com/images/login_img.png" alt="" />
        </div>
      </div>
      {!isLogin ? <Register /> : <Login />}
    </div>
  );
}

function Register() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const registerData = {
    email: "",
    password: "",
    confirmpassword: "",
  };
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch({ type: "LOGINPAGE", payload: true });
  };
  const handleLogin = () => {
    dispatch({ type: "LOGINPAGE", payload: true });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  return (
    <div className="right_signup">
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
      <div class="input-container3">
        <input
          value={inputValue3}
          onChange={handleInputChange3}
          className={inputValue3 ? "has-content3" : ""}
          type="password"
          id="myInput3"
        />
        <label for="myInput3" className={inputValue3 ? "has-content3" : ""}>
          Confirm Password
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
        <button className="btn_continue" onClick={handleSignUp}>
          CONTINUE
        </button>
        <button className="btn_login" onClick={handleLogin}>
          Existing User? Log in
        </button>
      </div>
    </div>
  );
}

export default Signup;
