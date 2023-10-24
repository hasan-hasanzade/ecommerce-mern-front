import React from 'react';
import styles from './cartitem.module.scss';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAppDispatch } from '../../redux/store';
import { CartItem } from '../../redux/cart/types';
import { addItem, decreaseItem, removeItem } from '../../redux/cart/slice';

type CartItemProps = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

const CartItemBlock: React.FC<CartItemProps> = ({ _id, title, price, imageUrl, count }) => {
  const dispatch = useAppDispatch();

  const onClickIncrease = () => {
    dispatch(
      addItem({
        _id,
      } as CartItem),
    );
  };

  const onClickDecrease = () => {
    dispatch(decreaseItem(_id));
  };

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove item?')) {
      dispatch(removeItem(_id));
    }

    return null;
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.title}>{title}</div>
          <div className={styles.actions}>
            <button onClick={onClickDecrease} className={styles.minus}>
              <AiOutlineMinus />
            </button>
            <div className={styles.input}>
              {count > 0 ? count : onClickRemove()}
            </div>
            <button onClick={onClickIncrease} className={styles.plus}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className={styles.rightside}>
          <button onClick={onClickRemove} className={styles.circle}>
            <AiOutlineCloseCircle size={24} />
          </button>
          <div className={styles.price}>${price * count}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItemBlock;
