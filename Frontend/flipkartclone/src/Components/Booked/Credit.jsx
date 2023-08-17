import { useSelector, useDispatch } from "react-redux";
import "./Credit.css";

function Credit({ price }) {
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });

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
      {paymentMode.credit && (
        <div className="credit_detail">
          <div>
            <input
              type="text"
              placeholder="Enter Card Number"
              maxLength={16}
              style={{ width: "40%" }}
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
              <select name="" id="">
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
              <select name="" id="">
                <option value="">YY</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="CVV" maxLength={3} />
            </div>
          </div>
          <div>
            <button
              className="pay_btn"
              style={{ backgroundColor: "#fb641b", padding: "15px" }}
            >
              PAY ₹{price}
            </button>
          </div>
        </div>
      )}
      <p style={{ color: "grey", marginLeft: "33px", marginTop: "-15px" }}>
        Add and secure your card as per RBI guidelines
      </p>
    </div>
  );
}

export default Credit;
