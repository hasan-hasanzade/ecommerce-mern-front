import React from 'react';
import logo from '../../assets/img/logo.png';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

import styles from './navbar.module.scss';

const Header = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNav);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={navbar ? styles['header-scroll'] : styles['header']}>
      <div className={styles.body}>
        <div className={styles.logo}>
          <img className={styles.image} src={logo} alt="logo" />
          <div className={styles.text}>Organick</div>
        </div>
        <nav className={styles.nav}>
          <ul className={isOpen ? styles['menu-active'] : styles['menu']}>
            <li className={styles.list}>
              <a className={styles.item} href="/">
                Home
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.item} href="/about">
                About
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.item} href="/shop">
                Shop
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.item} href="/services">
                Blog
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.item} href="/blogs">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.bar}>
          {/* <div className={styles.search}>
            <button className={styles.search_icon}><AiOutlineSearch className={styles.aiout} color="white" size={24} /></button>  
               <form className={styles.form}>
                  <input className={styles.input} type="text" />
                  <button className={styles.button}><AiOutlineSearch className={styles.aiout} color="white" size={24} /></button>  
               </form> 
            </div> */}
          <div className={styles.cart}>
            <button className={styles.outcart}>
              <AiOutlineShoppingCart className={styles.shopping} color="white" size={24} />
              <span>0</span>
            </button>
          </div>
          <a href="#" className={styles.login}>
            <button>
              Log in
              <AiOutlineLogin className={styles.aiout} ai size={24} />
            </button>
          </a>
          <a href="#" className={styles.sign}>
            <button>
              Sign up
              <BsFillPersonFill className={styles.aiout} ai size={24} />
            </button>
          </a>
          <div className={styles.burger_wrap}>
            <div
              onClick={handleBurger}
              className={isOpen ? styles['burger-open'] : styles['burger']}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
