import React, { useContext } from "react";
import Product from "../Product";
import { productDetailsContext } from "../../context/ProductDetailsProvider";

function Catelog(props) {
  const [productDetails, setProductDetails] = useContext(productDetailsContext);
  console.log(productDetails);
  return (
    <div style={styles.catelog}>
      {productDetails.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {/* <Product />
      <Product />
      <Product />
      <Product /> */}
    </div>
  );
}

const styles = {
  catelog: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    width: "auto",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  product: {
    height: "185px",
    backgroundColor: "lightblue",
    width: "auto",
    marginBottom: "10px",
  },
};
export default Catelog;
