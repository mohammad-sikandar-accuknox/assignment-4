import React, { useContext } from "react";
import CartItem from "../CartItem";
import Header from "../Header";
import { ImCircleRight } from "react-icons/im";
import { productDetailsContext } from "../../context/ProductDetailsProvider";

function CartPage(props) {
  const [productDetails, setProductDetails] = useContext(productDetailsContext);
  console.log(productDetails);
  return (
    <>
      <Header cart />
      <div style={{ backgroundColor: "#F5F1F0", height: "95vh" }}>
        <div
          style={{
            height: "92%",

            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            backgroundColor: "white",
            WebkitBoxShadow: "0 4px 3px -3px black",
            MozBoxShadow: "0 4px 3px -3px black",
            boxShadow: "0 2px 2px -2px gray",
            border: "1px solid white",
          }}
        >
          <div style={styles.cartlist}>
            {productDetails.map((product) =>
              product.cart > 0 ? <CartItem key={product.id} /> : null
            )}
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
          </div>
          {/* <div
            style={{
              width: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              position: "relative",
              bottom: "-162px",
              padding: "15px",
            }}
          >
            <div style={{ fontWeight: 500 }}>3 Items</div>
            <div style={{ fontSize: "larger", fontWeight: 800 }}>$ 199.00</div>
          </div> */}
        </div>
        <div
          style={{
            paddingTop: "11px",
            textAlign: "center",
            fontWeight: 500,
            marginLeft: "-20px",
          }}
        >
          Proceed to checkout
          <span style={{ position: "absolute", paddingLeft: "7px" }}>
            <ImCircleRight
              style={{ backgroundColor: "lightpink", borderRadius: "100px" }}
            />
          </span>
        </div>
      </div>
    </>
  );
}

const styles = {
  cartlist: {
    display: "grid",
    gridRowGap: "20px",
    gridTemplateColumns: "auto",
    padding: "10px",
    marginTop: "60px",
  },
};
export default CartPage;
