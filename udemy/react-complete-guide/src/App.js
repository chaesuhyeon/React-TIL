import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showChartHandler = () => {
    setCartIsShown(true);
  };

  const hideChartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideChartHandler} />}
      <Header onShowCart={showChartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
