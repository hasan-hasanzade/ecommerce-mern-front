import React from 'react';
import styles from './shop.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/shop/shop.jpg';
import SideBar from '../../components/SideBar/SideBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

const Shop = () => {
  const [items, setItems] = React.useState([]);
  const [drawerItems, setDrawerItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://64160022c42f59a203ace67c.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <>
      <PageBanner title={'Shop'} img={bg} />
      <section className={styles.shop}>
        <div className={styles.content}>
          <SideBar />
          <div className={styles.inner}>
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
        </div>
      </section>
    </>
  );
};

export default Shop;
