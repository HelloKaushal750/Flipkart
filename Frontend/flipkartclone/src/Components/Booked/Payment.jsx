import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import Upi from "./UPI";
import Credit from "./Credit";
import Cash from "./Cash";
import { useToast } from '@chakra-ui/react' 

function Payment({ price }) {
  const toast = useToast()
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });
  console.log(paymentMode);

  return (
    <div className="payment_page">
      <Upi price={price} toast={toast} />
      <Credit price={price} toast={toast} />
      <Cash price={price} toast={toast} />
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
