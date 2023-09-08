import React from 'react';
import styles from './shop.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/shop/shop.jpg';
import SideBar from '../../components/SideBar/SideBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import Skeleton from '../../components/ProductCard/Skeleton';

const Shop = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('http://localhost:3333/items').then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <PageBanner title={'Shop'} img={bg} />
      <section className={styles.shop}>
        <div className={styles.content}>
          <SideBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className={styles.inner}>
            <div className={styles.body}>
              {
                isLoading 
                  ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) 
                  : items.map((obj) => <ProductCard key={obj._id} {...obj} />)
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
