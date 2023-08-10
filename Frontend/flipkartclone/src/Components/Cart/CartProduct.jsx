import "./CartProduct.css";
import { useState } from "react";
import { delivery } from "../../constant/data";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { removeFromCart } from "../../Redux/action";
import { movetosave } from "../../Redux/action";

function CartProduct({ data, index, setData, setSavedData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart_product_page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            height: "120px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={data.thumbnails} alt="" style={{ height: "100%" }} />
        </div>
        <div className="quantity_btn">
          <button
            className="inc_dec_btn"
            style={
              quantity === 1
                ? {
                    color: "rgb(187, 187, 187)",
                    border: "1px solid rgb(187, 187, 187)",
                    cursor: "no-drop",
                  }
                : {
                    color: "black",
                  }
            }
            onClick={() => {
              setQuantity(quantity - 1);
            }}
            disabled={quantity === 1}
          >
            -
          </button>
          <button className="display_quantity">{quantity}</button>
          <button
            className="inc_dec_btn"
            style={
              quantity === 10
                ? {
                    color: "rgb(187, 187, 187)",
                    border: "1px solid rgb(187, 187, 187)",
                    cursor: "no-drop",
                  }
                : {
                    color: "black",
                  }
            }
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            disabled={quantity === 10}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "16px" }}>{data.name}</h3>
        <p style={{ fontSize: "14px" }}>
          {delivery[index] ? delivery[index] : "Delivery by Sun Aug 20"} |{" "}
          <span style={{ color: "green" }}>Free</span>{" "}
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            ₹40
          </span>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          <p style={{ fontSize: "14px", color: "grey" }}>
            Seller: {data.seller.seller_name}
          </p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            style={{ width: "8%" }}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              textDecoration: "line-through",
              color: "grey",
              fontSize: "14px",
            }}
          >
            ₹{data.original_price}
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
            ₹{data.current_price}
          </h3>
          <p style={{ color: "green", fontSize: "14px" }}>
            {data.discount_percent}% Off
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {data.offers.length > 0 && (
              <p style={{ color: "green", fontSize: "14px" }}>
                {data.offers.length} offers applied
              </p>
            )}
            <i
              class="fa-solid fa-circle-info"
              style={{ color: "green", fontSize: "14px" }}
            ></i>
          </div>
        </div>
        <div className="remove_btn_div" style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              movetosave(data._id, setData, setSavedData);
            }}
          >
            SAVE FOR LATER
          </button>
          <button onClick={onOpen}>REMOVE</button>
        </div>
        <div>
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Remove Item
                </AlertDialogHeader>

                <AlertDialogBody style={{ color: "grey" }}>
                  Are you sure you want to remove this item?
                </AlertDialogBody>

                <AlertDialogFooter
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: "30px",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <button
                    ref={cancelRef}
                    onClick={onClose}
                    style={{ border: "1px solid grey", padding: "10px" }}
                  >
                    CANCEL
                  </button>
                  <button
                    style={{
                      backgroundColor: "#2874f0",
                      color: "white",
                      padding: "10px",
                      border: "1px solid #2874f0",
                    }}
                    onClick={() => {
                      removeFromCart(data._id, data, setData, toast);
                      onClose();
                    }}
                    ml={3}
                  >
                    REMOVE
                  </button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
