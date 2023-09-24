import React from 'react';
import styles from './cart.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import CartEmpty from '../CartEmpty/CartEmpty';

import CartItem from '../CartItem/CartItem';
import { clearCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = ({ onClose, items, totalPrice, opened }) => {
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <div className={styles.head}>Shopping Cart</div>
            <button onClick={onClose} className={styles.close}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className={styles.body}>
            {!totalPrice ? (
              <CartEmpty onClose={onClose} />
            ) : (
              items.map((item) => <CartItem key={item._id} {...item} />)
            )}
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <div className={styles.text}>Subtotal:</div>
              <div className={styles.number}>${totalPrice}</div>
            </div>
            <button onClick={onClickClear} className={styles.button}>
              Clear Cart
            </button>
            <button className={styles.btn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
