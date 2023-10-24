import React from 'react';
import styles from './productcard.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { addItem, removeItem } from '../../redux/cart/slice';
import { cartSelector } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';

type ProductCardProps = {
  _id: string;
  category: string;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  category,
  imageUrl,
  title,
  price,
  rating,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const dispatch = useAppDispatch();

  const cartItems = useSelector(cartSelector);

  React.useEffect(() => {
    const existingItem = cartItems.find((item) => item._id === _id);
    setIsAdded(!!existingItem);
  }, [cartItems, _id]);

  const handleAddItem = () => {
    const item = {
      _id,
      imageUrl,
      title,
      price,
    } as CartItem;

    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

    if (!existingItem) {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item._id));
    }
  };

  return (
    <div className={styles.content}>
      <article className={styles.item}>
        <div className={styles.category}>
          <span className={styles.categoryTitle}>{category}</span>
        </div>
        <Link to={`/items/${_id}`} className={`${styles.image} ${styles._ibg}`}>
          <img src={imageUrl} alt="" />
        </Link>
        <div className={styles.bottom}>
          <div className={styles.main}>
            <div className={styles.name}>{title}</div>
            <button onClick={handleAddItem} className={styles.add}>
              {isAdded ? (
                <MdDoneOutline size={30} color="#7eb693" />
              ) : (
                <AiOutlinePlusCircle size={30} />
              )}
            </button>
          </div>
          <div className={styles.pricing}>
            <div className={styles.price}>
              <div className={styles.new}>${price}</div>
            </div>
            <div className={styles.rating}>
              <Rating
                name="half-rating-read"
                defaultValue={rating > 5 ? rating - 4 : rating}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
