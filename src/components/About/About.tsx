import React from 'react';
import styles from './about.module.scss';
import bgAbout from '../../assets/img/about/citrus.png';
import vegan from '../../assets/img/about/vegan.svg';
import mailbox from '../../assets/img/about/mailbox.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
    }),
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.about}>
        <div className="container">
          <div className={styles.wrapper}>
            <motion.div custom={1} variants={textAnimation} className={styles.image}>
              <img src={bgAbout} alt="cover" />
            </motion.div>
            <div className={styles.body}>
              <motion.h2 custom={2} variants={textAnimation} className={styles.subtitle}>
                About Us
              </motion.h2>
              <motion.p custom={2} variants={textAnimation} className={styles.title}>
                We Believe in Working Accredited Farmers
              </motion.p>
              <motion.p custom={2} variants={textAnimation} className={styles.text}>
                Welcome to the world of natural and organic. Here you can discover the bounty of
                nature. We have grown on the principles of health, and care. We aim to give our
                customers a healthy chemical-free meal for perfect nutrition.
              </motion.p>
              <motion.div custom={3} variants={textAnimation} className={styles.content}>
                <div className={styles.icon}>
                  <div className={styles.block}>
                    <img src={vegan} alt="vegan" />
                  </div>
                </div>
                <div className={styles.item}>
                  <h5 className={styles.heading}>Organic Foods Only</h5>
                  <p className={styles.description}>
                    The Product that you ordered will be verified that we have or not if have we
                    will start to move on with the next step.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={4} variants={textAnimation} className={styles.content}>
                <div className={styles.icon}>
                  <div className={styles.mblock}>
                    <img src={mailbox} alt="vegan" />
                  </div>
                </div>
                <div className={styles.item}>
                  <h5 className={styles.heading}>Quality Standards</h5>
                  <p className={styles.description}>
                    Once your product is packed it will be delivered to your nearby locality you can
                    directly visit the to buy the product.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={5} variants={textAnimation} className={styles.btn}>
                <Link to="/shop" className={styles.button}>
                  Shop Now{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>{' '}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
