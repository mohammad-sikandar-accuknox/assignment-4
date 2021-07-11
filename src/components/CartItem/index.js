import React, { useState } from "react";
import image from "../../images/im3.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

function CartItem(props) {
  const [num, setnum] = useState(1);
  const handleNumSub = () => {
    if (num > 1) {
      setnum((num) => --num);
    }
  };
  const handleNumAdd = () => {
    setnum((num) => ++num);
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
          Classic Roselyn Mawes
        </div>
        <div
          style={{
            paddingTop: "6px",
            fontSize: "14px",
            color: "#B09C97",
            fontWeight: 500,
          }}
        >
          $ 199.00
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
            onClick={handleNumSub}
          />
          <span style={{ position: "absolute" }}>{num}</span>{" "}
          <IoAdd
            style={{
              border: "1px solid gery",
              borderRadius: "6px",
              marginLeft: "15px",
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
            }}
            onClick={handleNumAdd}
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
