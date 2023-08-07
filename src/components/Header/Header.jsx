import React from 'react';
import logo from '../../assets/img/logo.png'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';

import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.body}>
         <div className={styles.logo}>
            <img className={styles.image} src={logo} alt="logo" />
            <div className={styles.text}>Organick</div>
         </div>
         <nav className={styles.nav}>
            <ul className={styles.menu}>
               <li className={styles.list}><a className={styles.item} href="/">Home</a></li>
               <li className={styles.list}><a className={styles.item} href="/about">About</a></li>
               <li className={styles.list}><a className={styles.item} href="/shop">Shop</a></li>
               <li className={styles.list}><a className={styles.item} href="/services">Services</a></li>
               <li className={styles.list}><a className={styles.item} href="/blogs">Blogs</a></li>
            </ul>
         </nav>
         <div className={styles.bar}>
            <div className={styles.search}>
            <button className={styles.search_icon}><AiOutlineSearch className={styles.aiout} color="white" size={24} /></button>  
               <form className={styles.form}>
                  <input className={styles.input} type="text" />
                  <button className={styles.button}><AiOutlineSearch className={styles.aiout} color="white" size={24} /></button>  
               </form> 
            </div>
            <div className={styles.cart}>
               <button className={styles.outcart}>
                  <AiOutlineShoppingCart className={styles.shopping} color="white" size={24} />
                  <span>0</span>
               </button>
            </div>
            <a href='#' className={styles.login}>
               <button>Login<AiOutlineLogin className={styles.aiout} ai size={24} /></button> 
            </a>
         </div>
      </div>
    </div>
  )
}

export default Header