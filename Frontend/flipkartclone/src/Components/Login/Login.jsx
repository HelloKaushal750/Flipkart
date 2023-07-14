import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function Login({ onClose }) {
  const toast = useToast();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Kindly fill all inputs",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else {
      axios
        .post("http://localhost:7000/login", loginData)
        .then((res) => {
          console.log(res);
          if (res.data.message === "Login Successful") {
            let username = loginData.email.split('@')[0].toLocaleUpperCase();
            console.log(username);
            dispatch({type:"USERNAME",payload:username})
            toast({
              title: `${res.data.message}`,
              status: "success",
              isClosable: true,
            });
            localStorage.setItem("token",res.data.token)
            setLoginData({ email: "", password: "" });
            onClose();
          } else if (res.data.message === "Invalid Password") {
            toast({
              title: `${res.data.message}`,
              status: "error",
              isClosable: true,
            });
          } else {
            toast({
              title: `${res.data.message}`,
              status: "error",
              isClosable: true,
            });
          }
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

  const handleSignup = () => {
    dispatch({ type: "LOGINPAGE", payload: false });
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setLoginData({ ...loginData, email: event.target.value });
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
    setLoginData({ ...loginData, password: event.target.value });
  };

  return (
    <div className="login_container">
      <div>
        <div className="input-container">
          <input
            value={loginData.email}
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
            value={loginData.password}
            onChange={handleInputChange2}
            className={inputValue2 ? "has-content2" : ""}
            type="password"
            id="myInput2"
          />
          <label
            htmlFor="myInput2"
            className={inputValue2 ? "has-content2" : ""}
          >
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
          <button className="btn_continue" onClick={handleLogin}>
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
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        <h1>New to Flipkart? Create an account</h1>
      </div>
    </div>
  );
}

export default Login;
