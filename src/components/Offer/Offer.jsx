import React from 'react';
import styles from './offer.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Offer = () => {

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://64e6f4ecb0fd9648b78f17fa.mockapi.io/item")
    .then((res) => {
      setItems(res.data)
    })
  },[])

  return (
    <section className={styles.offer}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.subtitle}>Offer</div>
          <div className={styles.title}>
            <h2>We Offer Organic For You</h2>
            <Link to="/shop" className={styles.button}>
              View All Product{' '}
              <span className={styles.arrow}>
                <BsFillArrowRightCircleFill />
              </span>{' '}
            </Link>
          </div>
        </div>
        <div className={styles.body}>
         {
            items.slice(4, 8).map((obj) => (
               <ProductCard
               category={obj.category}
               imageUrl={obj.imageUrl}
               name={obj.name}
               oldPrice={obj.oldPrice}
               newPrice={obj.newPrice}
             />
            ))
         }
        </div>
      </div>
    </section>
  );
};

export default Offer;
