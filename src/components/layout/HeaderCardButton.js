import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

function HeaderCardButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((crntNumber, item) => {
    return crntNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
}

export default HeaderCardButton;
