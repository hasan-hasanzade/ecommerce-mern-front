import React from 'react';
import styles from './sidebar.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import Slider from 'react-slider'

const MIN = 1;
const MAX = 100;

const SideBar = ({searchValue, setSearchValue}) => {
  const [values, setValues] = React.useState([MIN, MAX])
  // const onClickSearch = (e) => {

  // }

  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Shop The Latest</h3>
      <div className={styles.inner}>
        <div className={styles.body}>
          <div className={styles.search}>
            <input 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.input} 
            type="text" 
            placeholder="Search..." />
            <button className={styles.btn}>
              <AiOutlineSearch className={styles.icon} color="white" size={24} />
            </button>
          </div>
          <div className={styles.cats}>
            <div className={styles.category}>
              <h5 className={styles.heading}>Categories :</h5>
              <ul className={styles.list}>
                <li className={styles.item}>Vegetables</li>
                <li className={styles.item}>Fruits</li>
                <li className={styles.item}>Seeds</li>
                <li className={styles.item}>Berries</li>
              </ul>
            </div>
            <div className={styles.sort}>
            <h5 className={styles.heading}>Sort by :</h5>
              <ul className={styles.sortList}>
               <li className={styles.sortItem}>
                  <span className={styles.text}>Popular</span>
               </li>
               <li className={styles.sortItem}>
                  <span className={styles.text}>Price</span>
               </li>
               <li className={styles.sortItem}>
                  <span className={styles.text}>Alphabet</span>
               </li>
               <li className={styles.sortItem}>
                  <span className={styles.text}>New</span>
               </li>
              </ul>
            </div>
            <div className={styles.price}>
            <h5 className={styles.heading}>Price</h5>
              <Slider 
              className={styles.slider}
              onChange={setValues} 
              value={values} 
              min={MIN} 
              max={MAX} 
              />
              <div>
                <div className={styles.values}>${values[0]} - ${values[1]}</div>
              </div>
              <button className={styles.appBtn}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
