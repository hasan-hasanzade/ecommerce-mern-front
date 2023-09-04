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
    axios.get("https://64160022c42f59a203ace67c.mockapi.io/items")
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
          {items.map((obj) => (
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

export default Products;
