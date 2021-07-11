import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/Cart";
import ProductDetailsProvider from "./context/ProductDetailsProvider";

function App() {
  return (
    <>
      <Switch>
        <ProductDetailsProvider>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={ProductDetail} />
          <Route path="/cart" exact component={CartPage} />
        </ProductDetailsProvider>
      </Switch>
    </>

    //<Home />
  );
}

export default App;
