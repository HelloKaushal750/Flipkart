import "./Payment.css";

function Payment() {
  return (
    <div className="payment_page">
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input type="radio" name="payment" />
        <div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif"
            alt=""
            style={{ width: "25px" }}
          />
        </div>
        <p>UPI</p>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <input type="radio" name="payment" />
          <p>Credit / Debit / ATM Card</p>
        </div>
        <p style={{ color: "grey", marginLeft: "33px", marginTop: "-15px" }}>
          Add and secure your card as per RBI guidelines
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input type="radio" name="payment" />
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
