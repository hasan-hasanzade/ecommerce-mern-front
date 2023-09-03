import React from 'react';
import styles from './productcard.module.scss';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {MdDoneOutline} from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const ProductCard = ({id, category, imageUrl, title, oldPrice, newPrice, rating}) => {

  const[isAdded, setIsAdded] = React.useState(false);
  
  const dispatch = useDispatch()

  const handleAddItem = () => {
    onClickAdd()
    setIsAdded(!isAdded);
  }

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      newPrice
    }
    dispatch(addItem(item))
  }

  return (
    <div className={styles.content}>
      <article className={styles.item}>
        <div className={styles.category}>
          <span>{category}</span>
        </div>
        <Link to="/fullproduct" className={`${styles.image} ${styles._ibg}`}>
          <img src={imageUrl} alt="" />
        </Link>
        <div className={styles.bottom}>
          <div className={styles.main}>
            <div className={styles.name}>{title}</div>
            <button onClick={handleAddItem} className={styles.add}>{isAdded ? <MdDoneOutline size={30} color='#7eb693'/> : <AiOutlinePlusCircle size={30}/>}</button>
          </div>
          <div className={styles.pricing}>
            <div className={styles.price}>
              <div className={styles.old}>${oldPrice}</div>
              <div className={styles.new}>${newPrice}</div>
            </div>
            <div className={styles.rating}><Rating name="half-rating-read" defaultValue={rating > 5 ? rating - 4 : rating} precision={0.5} readOnly /></div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
