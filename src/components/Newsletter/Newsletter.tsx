import React from 'react';
import styles from './newsletter.module.scss';
import bg from '../../assets/img/news/bgnews.png';


const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
         <div className={styles.body_news}>
            <div className={styles.content_news}>
               <div className={styles.text_news}>
                  <p>Subscribe to <br /> our Newsletter</p>
               </div>
               <div className={styles.actions}>
                  <input className={styles.input_news} placeholder='Your Email Address' type="text" />
                  <a href='/loc' className={styles.button}>
                     Subscribe
                  </a>
               </div>
            </div>
            <div className={`${styles.image} ${styles._ibg}`}>
               <img src={bg} alt="background" />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Newsletter