import "./Navbar.css";
import { Link } from "react-router-dom";
// hello
function Navbar() {
  return (
    <div id="navbar">
      <div id="navImage">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
          width="100px"
        />
        <div style={{marginTop:"-5px"}}>
          <Link
            to={"/explore"}
            style={{
              color: "white",
              fontSize: "10px",
              textDecoration: "none",
              fontStyle: "italic",
            }}
          >
            Explore <span style={{ color: "yellow" }}>Plus <i className="fa-solid fa-plus"></i></span>
          </Link>
        </div>
      </div>
      <div id="navContent">
        <form id="searchBar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="no-outline"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            <div className="arrow-up"></div>
            <div className="contain">
              <div className="firstDiv">
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  New Customer?
                </p>
                <Link
                  to={"/signup"}
                  style={{
                    color: "#2874f0",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Sign Up
                </Link>
              </div>
              <div>
                <i className="fa-solid fa-user"></i>
                <p>My Profile</p>
              </div>
              <div>
                <i className="fa-solid fa-plus"></i>
                <p>Flipkart Plus Zone</p>
              </div>
              <div>
                <i className="fa-solid fa-folder-plus"></i>
                <p>Orders</p>
              </div>
              <div>
                <i className="fa-solid fa-heart"></i>
                <p>Wishlist</p>
              </div>
              <div>
                <i className="fa-solid fa-shield-halved"></i>
                <p>Rewards</p>
              </div>
              <div>
                <i className="fa-solid fa-rug"></i>
                <p>Gift Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="navCart">
        <button>Become a Seller</button>
        <div className="dropdown2">
          <button className="dropbtn2">More</button>
          <i
            style={{ fontSize: "10px" }}
            className="fa-solid fa-chevron-down"
          ></i>
          <div className="dropdown-content2">
            <div className="arrow-up2"></div>
            <div className="contain2">
              <div>
                <i className="fa-solid fa-bell"></i>
                <p>Notification Preferences</p>
              </div>
              <div>
                <i className="fa-solid fa-clipboard-question"></i>
                <p>24x7 Customer Care</p>
              </div>
              <div>
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p>Advertise</p>
              </div>
              <div>
                <i className="fa-solid fa-download"></i>
                <p>Download App</p>
              </div>
            </div>
          </div>
        </div>
        <div id="iconCart">
          <i className="fa-solid fa-cart-shopping"></i>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
