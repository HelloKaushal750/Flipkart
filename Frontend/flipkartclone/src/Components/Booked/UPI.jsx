import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


function Upi({ price, toast}) {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(60);
  const [redirect, setRedirect] = useState(false);
  const [upi, setUpi] = useState("");
  const [getupi, setGetUpi] = useState(false);
  const [verification, setVerification] = useState("");
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });

  const handleupi = () => {
    if (upi.length === 0) {
      toast({
        title: 'Please Enter UPI ID',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    } else if (upi.length < 12) {
      toast({
        title: 'Invalid UPI ID',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      setUpi("");
    } else {
      setUpi("");
      setGetUpi(true);
    }
  };

  const handleupipayment = () => {
    setVerification("Open PhonePe App and make the payment");
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 50) {
            return setRedirect(true);;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/confirmation"} />;
  }

  return (
    <div
      style={
        paymentMode.upi
          ? { backgroundColor: "#f5faff" }
          : { backgroundColor: "white" }
      }
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input
          type="radio"
          name="payment"
          value={paymentMode.upi}
          onChange={(e) => {
            dispatch({
              type: "PAYMENTMODE",
              payload: { upi: e.target.checked, credit: false, cash: false },
            });
          }}
        />
        <div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif"
            alt=""
            style={{ width: "25px" }}
          />
        </div>
        <p>UPI</p>
      </div>
      {paymentMode.upi && (
        <div>
          <p
            style={{
              marginBottom: "15px",
              marginLeft: "78px",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            Your UPI ID
          </p>
          <div style={{ display: "flex", gap: "20px", marginLeft: "78px" }}>
            <div
              style={{
                width: "40%",
                display: "flex",
                gap: "20px",
                border: "1px solid grey",
                padding: "15px",
                paddingTop: "20px",
                paddingBottom: "10px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <div className="input-container4">
                <input
                  type="text"
                  onChange={(event) => {
                    setUpi(event.target.value);
                  }}
                  className={upi ? "has-content" : ""}
                  value={upi}
                />
                <label htmlFor="myInput" className={upi ? "has-content" : ""}>
                  Enter UPI ID
                </label>
              </div>
              <div style={{ marginTop: "-10px" }}>
                <button style={{ color: "#2874f0" }} onClick={handleupi}>
                  VERIFY
                </button>
              </div>
            </div>
            <button
              className="pay_btn"
              onClick={handleupipayment}
              style={
                getupi
                  ? { backgroundColor: "#fb641b" }
                  : { backgroundColor: "grey", cursor: "no-drop" }
              }
              disabled={getupi ? false : true}
            >
              PAY ₹{price}
            </button>
          </div>
          {getupi && (
            <p
              style={{
                marginLeft: "78px",
                marginTop: "10px",
                color: "green",
              }}
            >
              <i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;
              {verification.length > 0
                ? `${verification} in ${seconds} seconds.`
                : localStorage.getItem("username")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Upi;
