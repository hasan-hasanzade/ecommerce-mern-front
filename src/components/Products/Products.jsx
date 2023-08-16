import React from 'react';
import styles from './products.module.scss';
import ProductCard from '../ProductCard/ProductCard';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Products = () => {
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
    {
      category: 'Vegetable',
      imageUrl: 'https://source.unsplash.com/iBW28FXHAxg',
      name: 'Green peas',
      oldPrice: 9,
      newPrice: 5.99,
    },
    {
      category: 'Vegetable',
      imageUrl: 'https://source.unsplash.com/paOhdpqcYuY',
      name: 'Bunch of tomato',
      oldPrice: 10,
      newPrice: 8.19,
    },
    {
      category: 'Fruit',
      imageUrl: 'https://source.unsplash.com/haSJEJYzl5A',
      name: 'Pear',
      oldPrice: 5,
      newPrice: 3.19,
    },
    {
      category: 'Fruit',
      imageUrl: 'https://source.unsplash.com/U1iYwZ8Dx7k',
      name: 'Mandarin',
      oldPrice: 5,
      newPrice: 3.99,
    },
  ];

  return (
    <section className={styles.products}>
      <div className="container">
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.subtitle}>Our Products</div>
        <div className={styles.body}>
          {arr.map((obj) => (
            <ProductCard 
            category={obj.category} 
            imageUrl={obj.imageUrl}
            name={obj.name}
            oldPrice={obj.oldPrice}
            newPrice={obj.newPrice}
            />
          ))}
        </div>
        {/* <div className={styles.load}>
            <a href="/shop" className={styles.button}>Load More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
         </div> */}
      </div>
    </section>
  );
};

export default Products;
