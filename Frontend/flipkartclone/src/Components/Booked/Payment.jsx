import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import Upi from "./UPI";
import Credit from "./Credit";
import Cash from "./Cash";

function Payment({ price }) {
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });
  console.log(paymentMode);

  return (
    <div className="payment_page">
      <Upi price={price} />
      <Credit price={price} />
      <Cash price={price} />
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
