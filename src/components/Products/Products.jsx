import React from 'react';
import styles from './products.module.scss';
import broc from '../../assets/img/products/broc.png';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className="container">
         <h3 className={styles.title}>Categories</h3>
         <div className={styles.subtitle}>Our Products</div>
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
         {/* <div className={styles.load}>
            <a href="/shop" className={styles.button}>Load More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
         </div> */}
         
      </div>
    </section>
  )
}

export default Products