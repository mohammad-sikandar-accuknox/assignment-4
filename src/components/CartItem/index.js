import React, { useState, useContext } from "react";
import image from "../../images/im3.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import { productDetailsContext } from "../../context/ProductDetailsProvider";

function CartItem(props) {
  const [productDetails, setProductDetails] = useContext(productDetailsContext);
  const handleNumSub = (id) => {
    console.log(productDetails.filter((product) => product.id === id)[0]);
    let updatedProducts = productDetails.map((product) => {
      if (product.id === id && product.cart > 0) {
        product.cart = product.cart - 1;
      }
      return product;
    });
    setProductDetails(updatedProducts);
  };
  const handleNumAdd = (id) => {
    console.log(id);
    let updatedProducts = productDetails.map((product) => {
      if (product.id === id) {
        product.cart = product.cart + 1;
      }
      return product;
    });
    setProductDetails(updatedProducts);
  };
  return (
    <div style={styles.cartitem}>
      <div style={{ width: "30%" }}>
        <img
          style={{
            height: "-webkit-fill-available",
            width: "auto",
            borderRadius: "10px",
          }}
          src={image}
          alt={""}
        />
      </div>
      <div style={{ paddingTop: "5px" }}>
        <div
          style={{ paddingTop: "5px", fontWeight: "600", fontSize: "medium" }}
        >
          {props.product.name}
        </div>
        <div
          style={{
            paddingTop: "6px",
            fontSize: "14px",
            color: "#B09C97",
            fontWeight: 500,
          }}
        >
          $ {props.product.price}
        </div>
        <div
          style={{
            paddingTop: "5px",
          }}
        >
          <IoRemove
            style={{
              border: "1px solid gery",
              borderRadius: "6px",
              marginRight: "15px",
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
            }}
            onClick={() => handleNumSub(props.product.id)}
          />
          <span style={{ position: "absolute" }}>{props.product.cart}</span>{" "}
          <IoAdd
            style={{
              border: "1px solid gery",
              borderRadius: "6px",
              marginLeft: "15px",
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
            }}
            onClick={() => handleNumAdd(props.product.id)}
          />
          <span style={{ paddingLeft: "106px" }}>
            <AiOutlineDelete />
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cartitem: {
    display: "flex",
    width: "auto",
    height: "80px",
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px",
  },
};
export default CartItem;
