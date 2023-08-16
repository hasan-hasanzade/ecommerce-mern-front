import React from 'react';
import styles from './productcard.module.scss';
import broc from '../../assets/img/products/broc.png';

const ProductCard = (props) => {

  return (
    <div className={styles.content}>
      <article className={styles.item}>
        <div className={styles.category}>
          <span>{props.category}</span>
        </div>
        <a href="/product" className={`${styles.image} ${styles._ibg}`}>
          <img src={props.imageUrl} alt="" />
        </a>
        <div className={styles.bottom}>
          <div className={styles.main}>
            <div className={styles.name}>{props.name}</div>
          </div>
          <div className={styles.pricing}>
            <div className={styles.price}>
              <div className={styles.old}>${props.oldPrice}</div>
              <div className={styles.new}>${props.newPrice}</div>
            </div>
            <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
