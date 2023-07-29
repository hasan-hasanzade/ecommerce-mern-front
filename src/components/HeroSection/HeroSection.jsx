import React from 'react';
import styles from './herosection.module.scss';
import bg from '../../assets/img/hero/bg.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import fruit from '../../assets/img/hero/fruits.png';
import veget from '../../assets/img/hero/veget.png';


const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
               <div className="container">
                  <div className={styles.body}>
                     <div className={styles.subtitle}>100% Natural Food</div>
                     <h1 className={styles.title}>Choose the best healthier way <br /> of life</h1>
                     <a href="/shop" className={styles.button}>Explore Now <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
                  </div> 
               </div> 
               <div className={`${styles.image} ${styles._ibg}`}>
                  <img src={bg} alt="cover"/>
               </div>
                  <div className="container">
                     <div className={styles.offer}>
                        <a href='/shop' className={styles.fruit}>
                           <div className={styles.content}>
                              <div className={styles.ftitle}>Natural!!</div>
                              <div className={styles.fsubtitle}>Get Garden Fresh Fruits</div>
                           </div>
                           <div className={styles.banner}>
                              <img src={fruit} alt="fruit" />
                           </div>
                        </a>
                        <a href='/shop' className={styles.veget}>
                           <div className={styles.vcontent}>
                              <div className={styles.vtitle}>Offer!!</div>
                              <div className={styles.vsubtitle}>Get 10% off on Vegetables</div>
                           </div>
                           <div className={styles.vbanner}>
                              <img src={veget} alt="vegetables" />
                           </div>
                        </a>
                     </div>
                  </div>
               
      </section>
    </>
  )
}

export default HeroSection