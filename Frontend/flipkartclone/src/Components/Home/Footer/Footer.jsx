import { about, help, consumerPolicy, social } from "../../../constant/data";
import "./Footer.css";

function Footer() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#172337", fontSize: "12px",marginTop:"50px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          padding: "40px 60px",
          borderBottom: "1px solid #404756",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            borderRight: "2px solid #404756",
          }}
        >
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>ABOUT</h3>
            <div className="footer_tag">
              {about.map((ele) => {
                return (
                  <p style={{ color: "white", fontWeight: "600" }}>{ele}</p>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>HELP</h3>
            <div className="footer_tag">
              {help.map((ele) => {
                return (
                  <p style={{ color: "white", fontWeight: "600" }}>{ele}</p>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>
              CONSUMER POLICY
            </h3>
            <div className="footer_tag">
              {consumerPolicy.map((ele) => {
                return (
                  <p style={{ color: "white", fontWeight: "600" }}>{ele}</p>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>SOCIAL</h3>
            <div className="footer_tag">
              {social.map((ele) => {
                return (
                  <p style={{ color: "white", fontWeight: "600" }}>{ele}</p>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "15px",
          }}
        >
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>Mail Us:</h3>
            <div className="register_office">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#86837e", marginBottom: "10px" }}>
              Registered Office Address:
            </h3>
            <div className="register_office">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN: U51109KA2012PTC066107</p>
              <p>
                Telephone:{" "}
                <span style={{ color: "#2874f0", cursor: "pointer" }}>
                  044-45614700
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:"65% 32%",padding:"25px 60px 25px 80px"}}>
        <div className="footer_footer">
          <div>
            <i class="fa-solid fa-dumpster" style={{color:'#e3c232'}}></i>
            <p style={{color:"white"}}>Become a Seller</p>
          </div>
          <div>
            <i class="fa-solid fa-star-half-stroke" style={{color:'#e3c232'}}></i>
            <p style={{color:"white"}}>Advertise</p>
          </div>
          <div>
            <i class="fa-solid fa-gift" style={{color:'#e3c232'}}></i>
            <p style={{color:"white"}}>Gift Cards</p>
          </div>
          <div>
            <i class="fa-regular fa-circle-question" style={{color:'#e3c232'}}></i>
            <p style={{color:"white"}}>Help Center</p>
          </div>
          <div>
            <i class="fa-regular fa-copyright" style={{color:'white'}}></i>
            <p style={{color:"white"}}>2007-2023 Flipkart.com</p>
          </div>
        </div>
        <div style={{paddingLeft:"70px"}}>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
