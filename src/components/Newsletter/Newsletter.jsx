import React from 'react';
import styles from './newsletter.module.scss';
import bg from '../../assets/img/news/bgnews.png';


const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
         <div className={styles.body}>
            <div className={styles.content}>
               <div className={styles.text}>
                  <p>Subscribe to <br /> our Newsletter</p>
               </div>
               <div className={styles.actions}>
                  <input placeholder='Your Email Address' type="text" />
                  <a className={styles.button}>
                     Subscribe
                  </a>
               </div>
            </div>
            <div className={styles.image}>
               <img src={bg} alt="background" />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Newsletter