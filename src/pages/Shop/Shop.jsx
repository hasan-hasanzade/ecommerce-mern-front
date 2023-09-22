import React from 'react';
import styles from './shop.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/shop/shop.jpg';
import SideBar from '../../components/SideBar/SideBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import Skeleton from '../../components/ProductCard/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import SearchError from '../../components/SearchError/SearchError';

const Shop = () => {
  const [items, setItems] = React.useState([]);
  const [originalItems, setOriginalItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(1);
  const [categoryName, setCategoryName] = React.useState('all');
  const currentPage = React.useRef();
  const limit = 8;

  React.useEffect(() => {
    currentPage.current = 1;
    getPages();
  }, []);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPages();
  };

  React.useEffect(() => {
    handleCategory();
  }, [categoryName]);

  const getPages = () => {
    axios
      .get(`http://localhost:3333/paginatedItems?page=${currentPage.current}&limit=${limit}`)
      .then((res) => {
        setItems(res.data.result);
        setOriginalItems(res.data.result);
        setIsLoading(false);
        setPageCount(res.data.pageCount);
      });
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();

    if (searchTerm === '' || searchTerm.length === 1) {
      setErrorMessage(true);
      setItems([]);
      setPageCount(0);
    } else {
      axios
        .get(`http://localhost:3333/search?q=${searchTerm}`)
        .then((res) => {
          const foundItems = res.data.items;
          setItems(foundItems);
          const totalCount = res.data.totalCount;
          const calculatedPageCount = Math.ceil(totalCount / limit);
          setPageCount(calculatedPageCount);
          if (foundItems.length === 0) {
            setErrorMessage(true);
          } else {
            setErrorMessage(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(true);
        });
    }
  };

  const handleCategory = () => {
    if (categoryName !== 'all') {
      axios
        .get(`http://localhost:3333/category?c=${categoryName}`)
        .then((res) => {
          const foundItems = res.data.items;
          setItems(foundItems);
          const totalCount = res.data.totalCount;
          const calculatedPageCount = Math.ceil(totalCount / limit);
          setPageCount(calculatedPageCount);
          setErrorMessage(false);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(true);
        });
    } else {
      setItems(originalItems);
      const totalCount = originalItems.length;
      const calculatedPageCount = Math.ceil(totalCount / limit);
      setPageCount(calculatedPageCount);
    }
  };

  

  return (
    <>
      <PageBanner title={'Our Shop'} img={bg} />
      <section className={styles.shop}>
        <div className={styles.content}>
          <SideBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
            setCategoryName={setCategoryName}
            handleCategory={handleCategory}
          />
          <div className={styles.inner}>
            <div className={styles.body}>
              {errorMessage ? (
                <SearchError setErrorMessage={setErrorMessage} />
              ) : isLoading ? (
                [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              ) : (
                items.map((obj) => <ProductCard key={obj._id} {...obj} />)
              )}
            </div>
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
