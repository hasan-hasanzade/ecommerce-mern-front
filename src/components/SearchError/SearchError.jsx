import React from 'react';
import styles from './searcherror.module.scss';
import search from '../../assets/img/search-err/search.png';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const SearchError = ({ setErrorMessage, getFilteredItems }) => {

  const dispatch = useDispatch();


  const handleBack = () => {
    setErrorMessage(false);
    dispatch(setSearchValue(''))
    getFilteredItems();

  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.image}>
          <img src={search} alt="err" />
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>
            Your search did not match any products. You may consider to:
          </h4>
          <ul className={styles.list}>
            <li className={styles.item}>Check the spelling</li>
            <li className={styles.item}>Use less keywords</li>
            <li className={styles.item}>Use different keywords</li>
          </ul>
          <button onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default SearchError;
