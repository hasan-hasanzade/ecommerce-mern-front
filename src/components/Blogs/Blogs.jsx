import React from 'react';
import styles from './blogs.module.scss';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import salad from '../../assets/img/blogs/salad.png';
import tomato from '../../assets/img/blogs/tomato.png'

const Blogs = () => {
  return (
    <section className={styles.blogs}>
      <div className="container">
         <div className={styles.heading}>
               <div className={styles.subtitle}>Blogs</div>
               <div className={styles.title}>
                  <h2>Discover weekly content about <br /> organic food, & more</h2>
                  <a href="/shop" className={styles.button}>More News <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
               </div>
         </div>
         <div className={styles.body}>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={salad} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>The Benefits of Vitamin D & How to Get It</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <a href="/blogs" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={tomato} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>Our Favourite Summertime Tomato</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <a href="/blogs" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Blogs