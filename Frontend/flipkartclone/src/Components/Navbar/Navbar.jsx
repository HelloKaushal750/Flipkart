import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Signup from "../Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const username = useSelector((state) => {
    return state.loggedInUser;
  });
  const handleSearch = ()=>{
    navigate(`/product/${inputSearch}`)
  }
  const gotToCart = ()=>{
    if(!localStorage.getItem('username')){
      alert("Please Login")
    }else{
      navigate("/cart")
    }
  }
  return (
    <div id="navbar">
      <div id="navImage">
        <Link to={'/'}><img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
          width="100px"
        /></Link>
        <div
          style={{
            marginTop: "-5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <div>
            <Link
              to={"/explore"}
              style={{
                color: "white",
                fontSize: "10px",
                textDecoration: "none",
                fontStyle: "italic",
              }}
            >
              Explore <span style={{ color: "yellow" }}>Plus </span>
            </Link>
          </div>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="navContent">
        <form id="searchBar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="no-outline"
            onChange={(e)=>{setInputSearch(e.target.value)}}
          />
          <button type="submit" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="dropdown">
          {!localStorage.getItem('username') ? (
            <button className="dropbtn">Login</button>
          ) : (
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                color: "white",
                marginLeft: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {localStorage.getItem('username')}
              <i
                style={{ fontSize: "10px" }}
                className="fa-solid fa-chevron-down"
              ></i>
            </p>
          )}
          <div className="dropdown-content" style={{cursor:"pointer"}}>
            <div className="arrow-up"></div>
            <div className="contain">
              {!localStorage.getItem('username') && (
                <div className="firstDiv">
                  <p style={{ fontWeight: "600", fontSize: "15px" }}>
                    New Customer?
                  </p>
                  <button
                    onClick={() => {
                      onOpen();
                      dispatch({ type: "LOGINPAGE", payload: false });
                    }}
                    style={{
                      color: "#2874f0",
                      textDecoration: "none",
                      fontWeight: "400",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size={"2xl"}
                isCentered={true}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <Signup onClose={onClose} />
                </ModalContent>
              </Modal>

              <div>
                <i className="fa-solid fa-user"></i>
                <p>My Profile</p>
              </div>
              <div>
                <i className="fa-solid fa-plus"></i>
                <p>Flipkart Plus Zone</p>
              </div>
              <div onClick={()=>{navigate('/order')}}>
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
              {localStorage.getItem('username') && (
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    dispatch({type:"USERNAME",payload:""})
                    navigate("/")
                  }}
                >
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <p>Logout</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="navCart">
        <button>Become a Seller</button>
        <div className="dropdown2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0px",
            }}
          >
            <button className="dropbtn2">More</button>
            <i
              style={{ fontSize: "10px" }}
              className="fa-solid fa-chevron-down"
            ></i>
          </div>

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
        <div id="iconCart" onClick={gotToCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
