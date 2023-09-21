import React from 'react';
import styles from './shop.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/shop/shop.jpg';
import SideBar from '../../components/SideBar/SideBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import Skeleton from '../../components/ProductCard/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Shop = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [pageCount, setPageCount] = React.useState(1);
  const currentPage = React.useRef();
  const limit = 8;

  React.useEffect(() => {
    currentPage.current = 1;
    getPages()
  }, []);

  
  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPages();

  };

  const getPages = () => {
    axios
      .get(`http://localhost:3333/paginatedItems?page=${currentPage.current}&limit=${limit}`)
      .then((res) => {
        setItems(res.data.result);
        setIsLoading(false);
        setPageCount(res.data.pageCount);
      });
  }
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
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Shop;
