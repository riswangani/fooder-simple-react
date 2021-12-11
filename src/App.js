import React, { useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App(props) {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
