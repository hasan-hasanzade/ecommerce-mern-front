import React from 'react';
import styles from './products.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const [items, setItems] = React.useState([]);
  const [drawerItems, setDrawerItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64e6f4ecb0fd9648b78f17fa.mockapi.io/item")
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  },[])



  return (
    <section className={styles.products}>
      <div className="container">
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.subtitle}>Our Products</div>
        <div className={styles.body}>
          {items.map((obj) => (
            <ProductCard 
            category={obj.category} 
            imageUrl={obj.imageUrl}
            name={obj.name}
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
