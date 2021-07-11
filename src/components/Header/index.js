import React from "react";
import { VscArrowLeft, VscListSelection } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useHistory } from "react-router-dom";

function Header(props) {
  let history = useHistory();
  const handleCart = () => {
    history.push("/cart");
  };
  return (
    <div style={styles.header}>
      {props.home ? (
        <VscListSelection style={{ paddingLeft: "8px" }} />
      ) : (
        <VscArrowLeft
          style={{ paddingLeft: "8px" }}
          onClick={() => history.goBack()}
        />
      )}
      {props.cart ? (
        <p
          style={{
            position: "absolute",
            right: "45%",
            top: "4px",
            fontWeight: 600,
          }}
        >
          My Cart
        </p>
      ) : null}
      {props.home || props.detail ? (
        <div>
          <HiOutlineShoppingBag
            style={{ paddingRight: "8px" }}
            onClick={handleCart}
          />
          <span
            style={{
              position: "absolute",
              right: "20px",
              zIndex: "100",
              backgroundColor: "yellow",
              borderRadius: "146px",
              padding: "6px",
              fontSize: "15px",
              top: "9px",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            {props.cartNumber > 0 ? props.cartNumber : null}
          </span>
        </div>
      ) : null}
    </div>
  );
}

const styles = {
  header: {
    height: "37px",
    weidht: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
};
export default Header;
