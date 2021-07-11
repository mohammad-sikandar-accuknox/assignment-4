import React, { useContext } from "react";
import Catelog from "../Catelog";
import Header from "../Header";
import SelectBar from "../SelectBar";
import { productDetailsContext } from "../../context/ProductDetailsProvider";

function Home(props) {
  const [productDetails, setProductDetails] = useContext(productDetailsContext);

  const cartNumber = () => {
    let counter = 0;
    productDetails.map((product) => (product.cart > 0 ? counter++ : null));
    return counter;
  };
  console.log(cartNumber());
  return (
    <div style={{ padding: "2px" }}>
      <Header home cartNumber={cartNumber()} />
      <div style={{ marginLeft: "8px", marginTop: "30px" }}>
        <h2 style={{ marginBottom: "-15px" }}>Discover our exclusive</h2>
        <h2>watches</h2>
      </div>
      <SelectBar />
      <Catelog />
    </div>
  );
}

export default Home;
