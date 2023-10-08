import React from 'react';
import cart from '../../assets/img/cart/empty-cart.png';
import styles from './cartempty.module.scss';

const CartEmpty = ({onClose}) => {
  return (
    <div className={styles.content}>
      <img className={styles.image} src={cart} alt="" />
      <div className={styles.text}>
        You have no items in your cart. <br /> Let's go buy something!
      </div>
      <button onClick={onClose} className={styles.btn}>Back</button>
    </div>
  );
};

export default CartEmpty;
