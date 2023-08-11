import React from 'react';
import styles from './about.module.scss';
import bgAbout from '../../assets/img/about/citrus.png';
import vegan from '../../assets/img/about/vegan.svg';
import mailbox from '../../assets/img/about/mailbox.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <section className={styles.about}>
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.image}>
                  <img src={bgAbout} alt="cover"/>
               </div>
                <div className={styles.body}>
                     <div className={styles.subtitle}>About Us</div>
                     <h2 className={styles.title}>We Believe in Working Accredited Farmers</h2>
                     <p className={styles.text}>
                     Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.
                     </p>
                     <div className={styles.content}>
                        <div className={styles.icon}>
                           <div className={styles.block}>
                              <img src={vegan} alt="vegan" />
                           </div>
                        </div>
                        <div className={styles.item}>
                           <h5 className={styles.heading}>Organic Foods Only</h5>
                           <p className={styles.description}>The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.</p>
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
                           <p className={styles.description}>Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.</p>
                        </div>
                     </div>
                     <div className={styles.btn}>
                     <a href="/shop" className={styles.button}>Shop Now <span className={styles.arrow}><BsFillArrowRightCircleFill /></span> </a>
                     </div>
               </div> 
            </div>
              
         </div> 
         </section>
    </>
  )
}

export default About