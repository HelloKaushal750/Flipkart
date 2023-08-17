import { useSelector, useDispatch } from "react-redux";

function Cash({ price }) {
  const dispatch = useDispatch();
  const paymentMode = useSelector((state) => {
    return state.paymentMode;
  });
  return (
    <div
      style={
        paymentMode.cash
          ? { backgroundColor: "#f5faff" }
          : { backgroundColor: "white" }
      }
    >
      <div
        style={{
          display: "flex",
          gap: "20px",

          alignItems: "center",
        }}
      >
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
      {paymentMode.cash && (
        <div>
          <button
            className="pay_btn"
            style={{
              backgroundColor: "#fb641b",
              padding: "15px",
              marginTop: "20px",
              marginLeft: "33px",
            }}
          >
            CONFIRM ORDER
          </button>
        </div>
      )}
    </div>
  );
}

export default Cash;
