import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import Upi from "./UPI";

function Payment({ price }) {
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });
  console.log(paymentMode);

  return (
    <div className="payment_page">
      <Upi price={price} />
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
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
        <p style={{ color: "grey", marginLeft: "33px", marginTop: "-15px" }}>
          Add and secure your card as per RBI guidelines
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input
          type="radio"
          name="payment"
          value={paymentMode.cash}
          onChange={(e) => {
            dispatch({
              type: "PAYMENTMODE",
              payload: { upi: false, credit: false, cash: e.target.checked },
            });
          }}
        />
        <p>Cash on Delivery</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "no-drop",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <input type="radio" style={{ cursor: "no-drop" }} name="payment" />
          <p style={{ color: "grey" }}>EMI (Easy installments)</p>
        </div>
        <div>
          <p style={{ color: "grey" }}>
            Not applicable <i class="fa-solid fa-question"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
