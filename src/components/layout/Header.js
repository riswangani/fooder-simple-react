import React from 'react';

import mealsImage from '../../assets/images/meals.jpeg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FooderReact</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table ful of delicious food!' />
      </div>
    </>
  );
};

export default Header;
