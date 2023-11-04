import React from 'react';
import styles from './services.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/services/bgservices.jpg';
import snack from '../../assets/img/services/snack.jpg';
import bottle from '../../assets/img/services/Milk-Bottle.png';
import store from '../../assets/img/services/Online-Store.png';
import delivery from '../../assets/img/services/Delivery.png';
import natural from '../../assets/img/services/Natural-Food.png';
import vegetables from '../../assets/img/services/Vegetables-Bag.png';
import radish from '../../assets/img/services/Radish.png';
import bgForVideo from '../../assets/img/services/bgvideo.jpg';
import play from '../../assets/img/services/play.svg';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
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
      <PageBanner title={'Services'} img={bg} />
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.services}>
        <div className="container">
          <motion.div custom={1} variants={textAnimation} className={styles.heading}>
            <h2 className={styles.subtitle}>We Are The Best</h2>
            <h5 className={styles.title}>
              The Way Organic <br /> Magic Happens
            </h5>
          </motion.div>
          <div className={styles.body}>
            <div className={styles.left_items}>
              <motion.div custom={3} variants={textAnimation} className={styles.item}>
                <div className={styles.leftImg}>
                  <img src={bottle} alt="milk bottle" />
                </div>
                <div className={styles.desc}>
                  <h5>Dairy Products</h5>
                  <p>
                    In our listing, we have several collections of organic products. This is the
                    place where you need to choose the product.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={4} variants={textAnimation} className={styles.item}>
                <div className={styles.leftImg}>
                  <img src={store} alt="online store" />
                </div>
                <div className={styles.desc}>
                  <h5>Store Services</h5>
                  <p>
                    Once your product is packed it will be delivered to your nearby locality you can
                    directly visit the to buy the product.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={5} variants={textAnimation} className={styles.item}>
                <div className={styles.leftImg}>
                  <img src={delivery} alt="milk bottle" />
                </div>
                <div className={styles.desc}>
                  <h5>Delivery Services</h5>
                  <p>
                    If you are not comfortable going to the nearby market place we also will deliver
                    your product to your doorstep.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div custom={2} variants={textAnimation} className={styles.center}>
              <img src={snack} alt="" />
            </motion.div>
            <div className={styles.right_items}>
              <motion.div custom={6} variants={textAnimation} className={styles.item}>
                <div className={styles.right_img}>
                  <img src={natural} alt="natural food" />
                </div>
                <div className={styles.desc}>
                  <h5>Agricultural Services</h5>
                  <p>
                    They play a vital role in our success. Each and everyone is most important to us
                    and also for our success.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={7} variants={textAnimation} className={styles.item}>
                <div className={styles.right_img}>
                  <img src={vegetables} alt="online store" />
                </div>
                <div className={styles.desc}>
                  <h5>Organic Products</h5>
                  <p>
                    The Product that you ordered will be verified that we have or not if have we
                    will start to move on with the next step.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={8} variants={textAnimation} className={styles.item}>
                <div className={styles.right_img}>
                  <img src={radish} alt="milk bottle" />
                </div>
                <div className={styles.desc}>
                  <h5>Fresh Vegetables</h5>
                  <p>
                    Since there is no use of any chemicals and harmful breeds you will end up with
                    fresh and organic vegetables.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.video}>
        <motion.div custom={1} variants={textAnimation} className={styles.heading}>
          <h2 className={styles.subtitle}>Organick Only</h2>
          <h5 className={styles.title}>Fresh & Organic Everyday</h5>
          <p>
            They believe us and we are successful in fulfilling their believes. They play a vital
            role in our success. <br />
            Each and everyone is most important to us and also for our success.
          </p>
        </motion.div>
        <div className={`${styles.videobg} ${styles._ibg}`}>
          <img src={bgForVideo} alt="" />
        </div>

        <motion.div custom={2} variants={textAnimation} className={styles.button}>
          <img className={styles.playBtn} src={play} alt="" />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Services;
