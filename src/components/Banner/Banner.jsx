import React from 'react'
import styles from './banner.module.scss';
import fruit from '../../assets/img/hero/fruits.png';
import veget from '../../assets/img/hero/veget.png';

const Banner = () => {
  return (
   <div className="container">
   <div className={styles.offer}>
      <a href='/shop' className={styles.fruit}>
         <div className={styles.content}>
            <div className={styles.ftitle}>Natural!!</div>
            <div className={styles.fsubtitle}>Get Garden <br /> Fresh Fruits</div>
         </div>
         <div className={styles.banner}>
            <img src={fruit} alt="fruit" />
         </div>
      </a>
      <a href='/shop' className={styles.veget}>
         <div className={styles.vcontent}>
            <div className={styles.vtitle}>Offer!!</div>
            <div className={styles.vsubtitle}>Get 10% off <br /> on Vegetables</div>
         </div>
         <div className={styles.vbanner}>
            <img src={veget} alt="vegetables" />
         </div>
      </a>
   </div>
</div>
  )
}

export default Banner