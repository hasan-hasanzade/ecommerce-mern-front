import React from 'react';
import styles from './newsletter.module.scss';
import bg from '../../assets/img/news/bgnews.png';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
    }),
  };
  const rightAnimation = {
   hidden: {
     x: 100,
     opacity: 0,
   },
   visible: (custom: number) => ({
     x: 0,
     opacity: 1,
     transition: { type: 'tween', duration: 1, delay: custom * 0.5 },
   }),
 };
  return (
    <motion.section
      initial="hidden"
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      className={styles.newsletter}>
      <div className="container">
        <div className={styles.body_news}>
          <div className={styles.content_news}>
            <motion.div custom={1} variants={leftAnimation} className={styles.text_news}>
              <p>
                Subscribe to <br /> our Newsletter
              </p>
            </motion.div>
            <motion.div custom={1} variants={rightAnimation}  className={styles.actions}>
              <input className={styles.input_news} placeholder="Your Email Address" type="text" />
              <a href="/loc" className={styles.button}>
                Subscribe
              </a>
            </motion.div>
          </div>
          <div className={`${styles.image} ${styles._ibg}`}>
            <img src={bg} alt="background" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
