import React from 'react';
import styles from './herosection.module.scss';
import bg from '../../assets/img/hero/bg.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };
  return (
    <>
      <motion.section initial="hidden" whileInView={'visible'} viewport={{amount: 0.2, once: true}} className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <motion.div custom={1} variants={textAnimation} className={styles.subtitle}>
              100% Natural Food
            </motion.div>
            <motion.h1 custom={2} variants={textAnimation} className={styles.title}>
              Choose the best healthier way <br /> of life
            </motion.h1>
            <Link to="/shop">
              <motion.button custom={2.5} variants={textAnimation} className={styles.button}>
                Explore Now{' '}
                <span className={styles.arrow}>
                  <BsFillArrowRightCircleFill />
                </span>{' '}
              </motion.button>
            </Link>
          </div>
        </div>
        <div className={`${styles.image} ${styles._ibg}`}>
          <img src={bg} alt="cover" />
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
