import React, { useContext } from "react";
import Header from "../Header";
import image from "../../images/im3.png";
import { IoHeartOutline } from "react-icons/io5";
import { FcRegisteredTrademark } from "react-icons/fc";
import { productDetailsContext } from "../../context/ProductDetailsProvider";

function ProductDetail(props) {
  const [productDetails, setProductDetails] = useContext(productDetailsContext);
  var filterProduct = productDetails.filter(
    (product) => product.id === props.match.params.id
  );
  console.log(filterProduct);
  const handleAddToCart = (id) => {
    console.log(id);
    var tempProduct = productDetails.map((product) => {
      if (product.id === props.match.params.id) {
        product.cart = product.cart + 1;
      }
      return product;
    });
    console.log(tempProduct);
    setProductDetails(tempProduct);
  };
  const cartNumber = () => {
    let counter = 0;
    productDetails.map((product) => (product.cart > 0 ? counter++ : null));
    return counter;
  };
  return (
    <div style={styles.productdetail}>
      <Header detail cartNumber={cartNumber()} />
      <div style={styles.image}>
        <img
          style={{
            height: "100%",
            width: "91%",
            borderRadius: "inherit",
            paddingLeft: "17px",
          }}
          src={image}
          alt={""}
        />
      </div>
      <div style={styles.detail}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 600 }}>{filterProduct[0].name}</span>
          <span>
            <IoHeartOutline />
          </span>
        </div>
        <div style={{ padding: "15px" }}>
          With Classic feature such the slim case, details in rose gold or
          silver, and our heritage starp ruby and classic.
        </div>
        <div
          style={{
            display: "flex",
            height: "60px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "12px",
            paddingLeft: "40px",
            paddingRight: "60px",
          }}
        >
          <div
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
              padding: "3px",
              borderRadius: "7px",
            }}
          >
            Size : <span style={{ fontWeight: 500 }}>42mm</span>
          </div>
          <div
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
              padding: "3px",
              borderRadius: "7px",
            }}
          >
            color{" "}
            <span
              style={{ paddingTop: "2px", position: "relative", top: "3.5px" }}
            >
              <FcRegisteredTrademark />
            </span>
          </div>
        </div>
      </div>
      <div style={styles.addtocart}>
        <div
          style={{ paddingTop: "3%", fontWeight: 500 }}
          onClick={() => handleAddToCart(filterProduct[0].id)}
        >
          Add to Cart -{" "}
          <span style={{ color: "#BA9F98" }}>${filterProduct[0].price}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  productdetail: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FBF3F3",
  },
  image: {
    height: "51vh",
  },
  detail: {
    height: "37vh",
    borderRadius: "40px",
    backgroundColor: "white",
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0px 2px 0 rgba(0, 0, 0, 0.19)",
  },
  addtocart: {
    height: "6.4vh",
    textAlign: "center",
  },
};
export default ProductDetail;
