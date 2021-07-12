import { createContext, useState } from "react";

//create a context, with createContext api
export const productDetailsContext = createContext();

const ProductDetailsProvider = (props) => {
  // this state will be shared with all components
  const [productDetails, setProductDetails] = useState([
    {
      id: "w1",
      price: 199,
      name: "Classic Maves 1",
      cart: 0,
    },
    {
      id: "w2",
      price: 299,
      name: "Classic Maves 2",
      cart: 0,
    },
    {
      id: "w3",
      price: 399,
      name: "Classic Maves 3",
      cart: 0,
    },
    {
      id: "w4",
      price: 499,
      name: "Classic Maves 4",
      cart: 0,
    },
  ]);

  return (
    // this is the provider providing state
    <productDetailsContext.Provider value={[productDetails, setProductDetails]}>
      {props.children}
    </productDetailsContext.Provider>
  );
};

export default ProductDetailsProvider;
