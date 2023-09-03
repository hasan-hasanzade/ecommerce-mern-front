import React from 'react';
import styles from './offer.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Offer = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://64160022c42f59a203ace67c.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);

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
          {items.slice(4, 8).map((obj) => (
            <ProductCard
              key={obj.id}
              rating={obj.rating}
              id={obj.id}
              category={obj.category}
              imageUrl={obj.imageUrl}
              title={obj.title}
              oldPrice={obj.oldPrice}
              newPrice={obj.newPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
