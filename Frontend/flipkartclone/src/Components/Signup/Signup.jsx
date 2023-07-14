import "./Signup.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function Signup({ onClose }) {
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
      {!isLogin ? <Register /> : <Login onClose={onClose} />}
    </div>
  );
}

function Register() {
  const toast = useToast();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmpassword
    ) {
      toast({
        title: "Kindly fill all inputs",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else if (registerData.password !== registerData.confirmpassword) {
      toast({
        title: "Password and Confirm Password must be match",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else {
      axios
        .post("http://localhost:7000/signup", registerData)
        .then((res) => {
          if (res.data.message === "Registration Successful") {
            toast({
              title: `${res.data.message}`,
              status: "success",
              isClosable: true,
            });
          } else {
            toast({
              title: `${res.data.message}`,
              status: "info",
              isClosable: true,
            });
          }
          dispatch({ type: "LOGINPAGE", payload: true });
          setRegisterData({ email: "", password: "", confirmpassword: "" });
        })
        .catch((err) => {
          toast({
            title: `${err}`,
            status: "error",
            isClosable: true,
          });
        });
    }
  };
  const handleLogin = () => {
    dispatch({ type: "LOGINPAGE", payload: true });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setRegisterData({ ...registerData, email: event.target.value });
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
    setRegisterData({ ...registerData, password: event.target.value });
  };
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
    setRegisterData({ ...registerData, confirmpassword: event.target.value });
  };
  return (
    <div className="right_signup">
      <div className="input-container">
        <input
          value={registerData.email}
          onChange={handleInputChange}
          className={inputValue ? "has-content" : ""}
          type="email"
          id="myInput"
        />
        <label htmlFor="myInput" className={inputValue ? "has-content" : ""}>
          Enter Email
        </label>
      </div>
      <div className="input-container2">
        <input
          value={registerData.password}
          onChange={handleInputChange2}
          className={inputValue2 ? "has-content2" : ""}
          type="password"
          id="myInput2"
        />
        <label htmlFor="myInput2" className={inputValue2 ? "has-content2" : ""}>
          Enter Password
        </label>
      </div>
      <div className="input-container3">
        <input
          value={registerData.confirmpassword}
          onChange={handleInputChange3}
          className={inputValue3 ? "has-content3" : ""}
          type="password"
          id="myInput3"
        />
        <label htmlFor="myInput3" className={inputValue3 ? "has-content3" : ""}>
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
