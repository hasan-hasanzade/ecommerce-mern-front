import React from 'react';
import styles from './products.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/slices/productSlice';

const Products = () => {
 
  const items = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3333/items")
    .then((res) => {
      dispatch(setItems(res.data));
    })
  },[dispatch])



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
            oldPrice={obj.oldPrice}
            newPrice={obj.newPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
