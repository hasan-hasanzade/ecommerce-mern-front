import React from 'react';
import styles from './about.module.scss';
import bgAbout from '../../assets/img/about/bgabout.png';
import vegan from '../../assets/img/about/vegan.svg';
import mailbox from '../../assets/img/about/mailbox.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <>
      <section className={styles.about}>
         <div className="container">
                  <div className={styles.body}>
                     <div className={styles.subtitle}>About Us</div>
                     <h2 className={styles.title}>We Believe in Working Accredited Farmers</h2>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </p>
                     <div className={styles.content}>
                        <div className={styles.icon}>
                           <div className={styles.block}>
                              <img src={vegan} alt="vegan" />
                           </div>
                        </div>
                        <div className={styles.item}>
                           <h5 className={styles.heading}>Organic Foods Only</h5>
                           <p className={styles.description}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                     </div>
                     <div className={styles.content}>
                        <div className={styles.icon}>
                        <div className={styles.mblock}>
                              <img src={mailbox} alt="vegan" />
                           </div>
                        </div>
                        <div className={styles.item}>
                           <h5 className={styles.heading}>Quality Standards</h5>
                           <p className={styles.description}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                     </div>
                     <a href="/shop" className={styles.button}>Shop Now <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
                  </div> 
               </div> 
               <div className={`${styles.image} ${styles._ibg}`}>
                  <img src={bgAbout} alt="cover"/>
               </div>
         </section>
    </>
  )
}

export default AboutUs