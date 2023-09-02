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
    axios.get('https://64e6f4ecb0fd9648b78f17fa.mockapi.io/item').then((res) => {
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
                  category={obj.category}
                  imageUrl={obj.imageUrl}
                  name={obj.name}
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
