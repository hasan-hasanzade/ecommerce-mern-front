import React from 'react';
import styles from './products.module.scss';
import broc from '../../assets/img/products/broc.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className="container">
         <h3 className={styles.title}>Categories</h3>
         <div className={styles.subtitle}>Our Products</div>
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
         <div className={styles.load}>
         <a href="/shop" className={styles.button}>Load More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
         </div>
         
      </div>
    </section>
  )
}

export default Products