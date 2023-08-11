import React from 'react';
import styles from './herosection.module.scss';
import bg from '../../assets/img/hero/bg.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.subtitle}>100% Natural Food</div>
            <h1 className={styles.title}>
              Choose the best healthier way <br /> of life
            </h1>
            <a href="/shop" className={styles.button}>
              Explore Now{' '}
              <span className={styles.arrow}>
                <BsFillArrowRightCircleFill />
              </span>{' '}
            </a>
          </div>
        </div>
        <div className={`${styles.image} ${styles._ibg}`}>
          <img src={bg} alt="cover" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
