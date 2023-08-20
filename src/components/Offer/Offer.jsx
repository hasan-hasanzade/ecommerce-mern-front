import React from 'react';
import styles from './offer.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const Offer = () => {
  const arr = [
    {
      category: 'Vegetable',
      imageUrl: 'https://source.unsplash.com/q7BJL1qZ1Bw',
      name: 'Calabrese Broccoli',
      oldPrice: 15,
      newPrice: 8.99,
    },
    {
      category: 'Fruit',
      imageUrl: 'https://source.unsplash.com/yPI38imbQSI',
      name: 'Papaya',
      oldPrice: 13,
      newPrice: 6.99,
    },
    {
      category: 'Fruit',
      imageUrl: 'https://source.unsplash.com/vbAEHCrvXZ0',
      name: 'Cherry',
      oldPrice: 8,
      newPrice: 3.99,
    },
    {
      category: 'Vegetable',
      imageUrl: 'https://source.unsplash.com/1G7PGolEJUk',
      name: 'Corn',
      oldPrice: 11,
      newPrice: 7.99,
    },
  ];

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
            arr.map((obj) => (
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
