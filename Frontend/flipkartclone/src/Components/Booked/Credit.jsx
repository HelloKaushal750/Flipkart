import { useSelector, useDispatch } from "react-redux";
import "./Credit.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Credit({ price }) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");
  const [cardDetail, setCardDetail] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });

  const handlecredit = () => {
    if (cardDetail.cardNumber === "") {
      setText("Please Enter 16 Digits Card Number");
    } else if (cardDetail.cvv === "") {
      setText("Please Enter CVV");
    } else if (cardDetail.month === "") {
      setText("Please Enter Month");
    } else if (cardDetail.year === "") {
      setText("Please Enter Year");
    } else {
      if (
        cardDetail.cardNumber === "1111111111111111" &&
        cardDetail.cvv === "111"
      ) {
        setBoolean(true);
        setText("");
      } else {
        setText("No Card Detail Found! (CardNo. : 1111111111111111, CVV : 111)");
      }
    }
  };

  const handleOtp = ()=>{
    if(otp===""){
      setText2("Please Enter OTP")
    }else{
      if(otp==="1111"){
        setText2("");
        navigate('/confirmation')
      }else{
        setText2("Invalid OTP")
      }
    }
  }

  return (
    <div
      style={
        paymentMode.credit
          ? {
              backgroundColor: "#f5faff",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }
          : {
              backgroundColor: "white",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }
      }
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input
          type="radio"
          name="payment"
          value={paymentMode.credit}
          onChange={(e) => {
            dispatch({
              type: "PAYMENTMODE",
              payload: { upi: false, credit: e.target.checked, cash: false },
            });
          }}
        />
        <p>Credit / Debit / ATM Card</p>
      </div>
      {paymentMode.credit &&
        (!boolean ? (
          <div className="credit_detail">
            <div>
              <input
                type="text"
                placeholder="Enter Card Number"
                maxLength={16}
                style={{ width: "40%" }}
                onChange={(e) => {
                  setCardDetail({ ...cardDetail, cardNumber: e.target.value });
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid grey",
                  width: "26%",
                  backgroundColor: "white",
                }}
              >
                <p style={{ color: "grey" }}>Valid upto</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setCardDetail({ ...cardDetail, month: e.target.value });
                  }}
                >
                  <option value="">MM</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sept">Sept</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setCardDetail({ ...cardDetail, year: e.target.value });
                  }}
                >
                  <option value="">YY</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={3}
                  onChange={(e) => {
                    setCardDetail({ ...cardDetail, cvv: e.target.value });
                  }}
                />
              </div>
            </div>
            {text.length > 0 && (
              <p style={{ color: "red", fontSize: "12px" }}>{text}</p>
            )}
            <div>
              <button
                className="pay_btn"
                style={{ backgroundColor: "#fb641b", padding: "15px" }}
                onClick={handlecredit}
              >
                PAY ₹{price}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginLeft: "33px", marginTop: "-10px" }}>
            <p style={{ color: "green" }}>
              OTP sent to your RMN (Registered Mobile Number)
            </p>
            <div className="otp_input">
              <input
                type="text"
                placeholder="Enter OTP here..."
                maxLength={4}
                onChange={(e)=>{setOtp(e.target.value)}}
              />
              <button
              onClick={handleOtp}
                className="pay_btn"
                style={{ backgroundColor: "#fb641b", padding: "15px" }}
              >
                SUBMIT
              </button>
            </div>
            {
              text2.length>0 && <p style={{ color: "red", fontSize: "12px",marginTop:"10px" }}>{text2}</p>
            }
          </div>
        ))}
      <p style={{ color: "grey", marginLeft: "33px", marginTop: "-10px" }}>
        Add and secure your card as per RBI guidelines
      </p>
    </div>
  );
}

export default Credit;
