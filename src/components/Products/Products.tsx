import React from 'react';
import styles from './products.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { productSelector } from '../../redux/product/selectors';
import { fetchProducts } from '../../redux/product/asyncActions';

const Products: React.FC = () => {
  const  items  = useSelector(productSelector);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <section className={styles.products}>
      <div className="container">
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.subtitle}>Our Products</div>
        <div className={styles.body}>
          {items.slice(8, 16).map((obj) => (
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

export default Products;
