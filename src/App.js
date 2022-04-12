import { createContext, useState } from "react";
import "./App.css";
import Product from "./Components/Product/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProudctDetails/ProductDetails";

export const SelectedCat = createContext();

function App() {
  const [electedCategori, setSelectedCategori] = useState([]);
  return (
    <SelectedCat.Provider value={[electedCategori, setSelectedCategori]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/singleProduct/:singleProductId">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </SelectedCat.Provider>
  );
}

export default App;
