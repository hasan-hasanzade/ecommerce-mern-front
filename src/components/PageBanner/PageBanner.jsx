import React from 'react';
import styles from './pagebanner.module.scss';


const PageBanner = (props) => {
  return (
   <section className={styles.banner}>
      <div className={styles.title}>{props.title}</div>
      <div className={`${styles.image} ${styles._ibg}`}>
         <img src={props.img} alt="background" />
      </div>
   </section>
  )
}

export default PageBanner