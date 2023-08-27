import React from 'react';
import styles from './productcard.module.scss';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {MdDoneOutline} from 'react-icons/md';

const ProductCard = ({category, imageUrl, name, oldPrice, newPrice}) => {

  const[isAdded, setIsAdded] = React.useState(false);

  const handleAddItem = () => {
    setIsAdded(!isAdded);
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
            <div className={styles.name}>{name}</div>
            <button onClick={handleAddItem} className={styles.add}>{isAdded ? <MdDoneOutline size={30} color='#7eb693'/> : <AiOutlinePlusCircle size={30}/>}</button>
          </div>
          <div className={styles.pricing}>
            <div className={styles.price}>
              <div className={styles.old}>${oldPrice}</div>
              <div className={styles.new}>${newPrice}</div>
            </div>
            <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
