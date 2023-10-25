import React from 'react';
import styles from './banner.module.scss';
import fruit from '../../assets/img/hero/fruits.png';
import veget from '../../assets/img/hero/veget.png';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Banner: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1.33 2.5', '0.1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.2]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="container">
      <div className={styles.offer}>
        <Link to="/shop?category=fruits" className={styles.fruit}>
          <div className={styles.content}>
            <div className={styles.ftitle}>Natural!!</div>
            <div className={styles.fsubtitle}>
              Get Garden <br /> Fresh Fruits
            </div>
          </div>
          <div className={styles.banner}>
            <img src={fruit} alt="fruit" />
          </div>
        </Link>
        <Link to="/shop?category=vegetables" className={styles.veget}>
          <div className={styles.vcontent}>
            <div className={styles.vtitle}>Offer!!</div>
            <div className={styles.vsubtitle}>
              Get 10% off <br /> on Vegetables
            </div>
          </div>
          <div className={styles.vbanner}>
            <img src={veget} alt="vegetables" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Banner;
