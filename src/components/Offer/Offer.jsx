import React from 'react';
import styles from './offer.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import broc from '../../assets/img/products/broc.png';


const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className="container">
         <div className={styles.heading}>
            <div className={styles.subtitle}>Offer</div>
            <div className={styles.title}>
               <h2>We Offer Organic For You</h2>
               <a href="/shop" className={styles.button}>View All Product <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
            </div>
         </div>
         <div className={styles.body}>
         <div className={styles.content}>
               <article className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <a href='/product' className={`${styles.image} ${styles._ibg}`}>
                     <img src={broc} alt="" />
                  </a>
                  <div className={styles.bottom}>
                     <div className={styles.main}>
                        <div className={styles.name}>Calabrese Broccoli</div>
                     </div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                     </div>
                  </div>
               </article>
            </div>
            <div className={styles.content}>
               <article className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <a href='/product' className={`${styles.image} ${styles._ibg}`}>
                     <img src={broc} alt="" />
                  </a>
                  <div className={styles.bottom}>
                     <div className={styles.main}>
                        <div className={styles.name}>Calabrese Broccoli</div>
                     </div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                     </div>
                  </div>
               </article>
            </div>
            <div className={styles.content}>
               <article className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <a href='/product' className={`${styles.image} ${styles._ibg}`}>
                     <img src={broc} alt="" />
                  </a>
                  <div className={styles.bottom}>
                     <div className={styles.main}>
                        <div className={styles.name}>Calabrese Broccoli</div>
                     </div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                     </div>
                  </div>
               </article>
            </div>
            <div className={styles.content}>
               <article className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <a href='/product' className={`${styles.image} ${styles._ibg}`}>
                     <img src={broc} alt="" />
                  </a>
                  <div className={styles.bottom}>
                     <div className={styles.main}>
                        <div className={styles.name}>Calabrese Broccoli</div>
                     </div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Offer