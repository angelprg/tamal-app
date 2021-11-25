import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Atoles from "./Components/Atoles/Atoles";
import Tamales from "./Components/Tamales/Tamales";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [cartItems, setCartItems] = useState({});

  const emptyCart = () => setCartItems({});

  const addToCart = (catalogItem) => {
    const existingItem = cartItems[catalogItem.id];
    if (!existingItem) {
      const cart = {
        ...cartItems,
        [catalogItem.id]: { qty: 1, price: catalogItem.price },
      };
      setCartItems(cart);
    } else {
      const cart = {
        ...cartItems,
        [catalogItem.id]: {
          qty: existingItem.qty + 1,
          price: existingItem.price + catalogItem.price,
        },
      };
      setCartItems(cart);
    }
  };

  const removeFromCart = (catalogItem) => {
    const existingItem = cartItems[catalogItem.id];
    if (existingItem) {
      if (existingItem.qty <= 1) {
        let { [catalogItem.id]: omitir, ...restOfItems } = cartItems;
        setCartItems(restOfItems);
      } else {
        const cart = {
          ...cartItems,
          [catalogItem.id]: {
            qty: existingItem.qty - 1,
            price: existingItem.price - catalogItem.price,
          },
        };
        setCartItems(cart);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar cartItems={cartItems} emptyCart={emptyCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tamales"
            element={
              <Tamales
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/atoles"
            element={
              <Atoles
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
