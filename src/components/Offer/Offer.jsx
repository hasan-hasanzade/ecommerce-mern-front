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
         <a href='/product' className={styles.content}>
               <div  className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <div className={styles.image}>
                     <img src={broc} alt="" />
                  </div>
                  <div className={styles.bottom}>
                     <div className={styles.name}>Calabrese Broccoli</div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&copy;&copy;&copy;&copy;&copy;</div>
                     </div>
                  </div>
               </div>
            </a>
            <a href='/product' className={styles.content}>
               <div  className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <div className={styles.image}>
                     <img src={broc} alt="" />
                  </div>
                  <div className={styles.bottom}>
                     <div className={styles.name}>Calabrese Broccoli</div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&copy;&copy;&copy;&copy;&copy;</div>
                     </div>
                  </div>
               </div>
            </a>
            <a href='/product' className={styles.content}>
               <div  className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <div className={styles.image}>
                     <img src={broc} alt="" />
                  </div>
                  <div className={styles.bottom}>
                     <div className={styles.name}>Calabrese Broccoli</div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&copy;&copy;&copy;&copy;&copy;</div>
                     </div>
                  </div>
               </div>
            </a>
            <a href='/product' className={styles.content}>
               <div  className={styles.item}>
                  <div className={styles.category}>
                     <span>Vegetable</span>
                  </div>
                  <div className={styles.image}>
                     <img src={broc} alt="" />
                  </div>
                  <div className={styles.bottom}>
                     <div className={styles.name}>Calabrese Broccoli</div>
                     <div className={styles.pricing}>
                        <div className={styles.price}>
                           <div className={styles.old}>$20.00</div>
                           <div className={styles.new}>$10.00</div>
                        </div>
                        <div className={styles.rating}>&copy;&copy;&copy;&copy;&copy;</div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </div>
    </section>
  )
}

export default Offer