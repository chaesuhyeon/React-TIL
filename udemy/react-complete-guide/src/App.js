import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showChartHandler = () => {
    setCartIsShown(true);
  };

  const hideChartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideChartHandler} />}
      <Header onShowCart={showChartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
