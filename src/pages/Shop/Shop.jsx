import React from 'react';
import styles from './shop.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/shop/shop.jpg';
import SideBar from '../../components/SideBar/SideBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from '../../axios';
import Skeleton from '../../components/ProductCard/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import SearchError from '../../components/SearchError/SearchError';
import { useSelector, useDispatch } from 'react-redux';
import { setPageCount, setCategoryName } from '../../redux/slices/filterSlice';
import { setItems } from '../../redux/slices/productSlice';
import { useLocation } from 'react-router-dom';

const Shop = () => {
  const [originalItems, setOriginalItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const currentPage = React.useRef();
  const limit = 8;

  const { searchValue, pageCount, categoryName, sortBy, priceRange } = useSelector(
    (state) => state.filter,
  );

  const items = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');

  React.useEffect(() => {
    if (categoryName !== 'all') {
      getFilteredItems();
    }
  }, [categoryName]);

  React.useEffect(() => {
    if (categoryParam) {
      dispatch(setCategoryName(categoryParam));
    }
  }, [categoryParam, dispatch]);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getFilteredItems();
  };

  const handlePriceFilter = () => {
    getFilteredItems();
  };


  React.useEffect(() => {
    currentPage.current = 1;
    getFilteredItems();
  }, [categoryName, sortBy]);

  const getFilteredItems = () => {
    setIsLoading(true);

    axios
      .get(
        `/getFilteredItems?q=${searchValue}&c=${categoryName}&sort=${sortBy}&page=${currentPage.current}&limit=${limit}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`,
      )
      .then((res) => {
        dispatch(setItems(res.data.items));
        setIsLoading(false);
        dispatch(setPageCount(res.data.pageCount));
        setErrorMessage(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setErrorMessage(true);
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();

    if (searchTerm === '' || searchTerm.length === 1 || items.length === 0) {
      setErrorMessage(true);
      dispatch(setItems([]));
      dispatch(setPageCount(0));
    } else {
      getFilteredItems();
    }
  };

  const handleCategory = () => {
    currentPage.current = 1;
    if (categoryName === 'all') {
      dispatch(setItems(originalItems));
    }
  };

  const handleSort = () => {
    currentPage.current = 1;
  };

  return (
    <>
      <PageBanner title={'Our Shop'} img={bg} />
      <section className={styles.shop}>
        <div className={styles.content}>
          <SideBar
            handleSearch={handleSearch}
            handleCategory={handleCategory}
            handlePriceFilter={handlePriceFilter}
          />
          <div className={styles.inner}>
            <div className={styles.body}>
              {errorMessage && !isLoading && (
                <SearchError
                  getFilteredItems={getFilteredItems}
                  setErrorMessage={setErrorMessage}
                />
              )}
              {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <ProductCard key={obj._id} {...obj} />)}
            </div>
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
