import React from 'react'
import styles from './banner.module.scss';
import fruit from '../../assets/img/hero/fruits.png';
import veget from '../../assets/img/hero/veget.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
   <div className="container">
   <div className={styles.offer}>
      <Link to='/shop?category=fruits' className={styles.fruit}>
         <div className={styles.content}>
            <div className={styles.ftitle}>Natural!!</div>
            <div className={styles.fsubtitle}>Get Garden <br /> Fresh Fruits</div>
         </div>
         <div className={styles.banner}>
            <img src={fruit} alt="fruit" />
         </div>
      </Link>
      <Link to='/shop?category=vegetables' className={styles.veget}>
         <div className={styles.vcontent}>
            <div className={styles.vtitle}>Offer!!</div>
            <div className={styles.vsubtitle}>Get 10% off <br /> on Vegetables</div>
         </div>
         <div className={styles.vbanner}>
            <img src={veget} alt="vegetables" />
         </div>
      </Link>
   </div>
</div>
  )
}

export default Banner
