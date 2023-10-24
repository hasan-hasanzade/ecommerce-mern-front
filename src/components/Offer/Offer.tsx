import React from 'react';
import styles from './offer.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { productSelector } from '../../redux/product/selectors';
import { fetchProducts } from '../../redux/product/asyncActions';

const Offer: React.FC = () => {
  const items = useSelector(productSelector);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

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
              key={obj._id}
              rating={obj.rating}
              _id={obj._id}
              category={obj.category}
              imageUrl={obj.imageUrl}
              title={obj.title}
              price={obj.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
