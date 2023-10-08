import React from 'react';
import styles from './sidebar.module.scss';
import { AiOutlineSearch, AiOutlineCloseSquare } from 'react-icons/ai';
import Slider from 'react-slider';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchValue,
  setCategoryName,
  setSortBy,
  setPriceRange
} from '../../redux/slices/filterSlice';

const MIN = 1;
const MAX = 50;

const SideBar = ({ handleSearch, handleCategory, handleSort, handlePriceFilter, getFilteredItems }) => {
  const [selectedSort, setSelectedSort] = React.useState('popular ( high to low )');
  const categories = ['All', 'Fruits', 'Vegetables', 'Nuts', 'Berries'];
  const sort = ['popular ( high to low )', 'popular ( low to high )', 'price ( high to low )', 'price ( low to high )'];

  const { priceRange, searchValue } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const onClickCategory = (categoryName) => {
    dispatch(setCategoryName(categoryName === 'All' ? '' : categoryName));
    handleCategory();
  };

  const onClickSort = (sortName) => {
    dispatch(setSortBy(sortName));
    setSelectedSort(sortName);
  };

  const clearSearch = () => {
    dispatch(setSearchValue(''));
  };

  const handlePriceRangeChange = (newPriceRange) => {
    dispatch(setPriceRange(newPriceRange));
  };

  return (
    <aside className={styles.content}>
      <h3 className={styles.title}>Shop The Latest</h3>
      <div className={styles.inner}>
        <div className={styles.body}>
          <div className={styles.search}>
            <input
              value={searchValue}
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
              className={styles.input}
              type="text"
              placeholder="Search..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            {searchValue && (
              <span onClick={clearSearch} className={styles.clearIcon}>
                <AiOutlineCloseSquare size={18} color='#b8b8b8' />
              </span>
            )}
            <button onClick={handleSearch} className={styles.btn}>
              <AiOutlineSearch className={styles.icon} color="white" size={24} />
            </button>
          </div>
          <div className={styles.cats}>
            <div className={styles.category}>
              <h5 className={styles.heading}>Categories :</h5>
              <ul className={styles.list}>
                {categories.map((categoryName, i) => (
                  <li key={i} onClick={() => onClickCategory(categoryName)} className={styles.item}>
                    {categoryName}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.sort}>
              <h5 className={styles.heading}>Sort by :</h5>
              <ul className={styles.sortList}>
                {sort.map((sortName, i) => (
                  <li key={i} className={styles.sortItem}>
                    <span onClick={() => onClickSort(sortName)}  className={`${styles.text} ${sortName === selectedSort ? styles.active : ''}`}>
                      {sortName}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.price}>
              <h5 className={styles.heading}>Price</h5>
              <Slider
                className={styles.slider}
                onChange={handlePriceRangeChange}
                value={priceRange}
                min={MIN}
                max={MAX}
              />
              <div>
                <div className={styles.values}>
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
              <button onClick={handlePriceFilter} className={styles.appBtn}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
