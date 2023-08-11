import React from 'react';
import styles from './pagebanner.module.scss';
import bg from '../../assets/img/about-page/about-banner.jpg'

const PageBanner = () => {
  return (
   <section className={styles.banner}>
      <div className={styles.title}>About Us</div>
      <div className={`${styles.image} ${styles._ibg}`}>
         <img src={bg} alt="background" />
      </div>
   </section>
  )
}

export default PageBanner