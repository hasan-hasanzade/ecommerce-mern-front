import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import bg from '../../assets/img/team-page/team.jpg';
import styles from './ourteam.module.scss';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import shaneImg from '../../assets/img/about-page/giovani.jpg';
import mariaImg from '../../assets/img/about-page/maria.jpg';
import angelineImg from '../../assets/img/about-page/riga.jpg';
import keiraImg from '../../assets/img/team-page/keira.jpg';
import scottImg from '../../assets/img/team-page/scott.jpg';
import karenImg from '../../assets/img/team-page/karen.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';
import { motion } from 'framer-motion';

const OurTeam: React.FC = () => {
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
      <PageBanner title={'Our Team'} img={bg} />
      <motion.section
        initial="hidden"
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
        className={styles.team}>
        <div className="container">
          <motion.div custom={1} variants={textAnimation} className={styles.heading}>
            <h2 className={styles.subtitle}>The Team</h2>
            <h5 className={styles.title}>Our Organic Experts</h5>
            <p>
              We have grown on the principles of health, ecology, and care. We aim to give our{' '}
              <br />
              customers a healthy chemical-free meal for perfect nutrition.
            </p>
          </motion.div>
          <motion.div custom={2} variants={textAnimation} className={styles.team_cards}>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={shaneImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Shane Watson</div>
                  <div className={styles.prof}>Farmer</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={mariaImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Maria Thomas</div>
                  <div className={styles.prof}>Marketing</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={angelineImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Angelina Flora</div>
                  <div className={styles.prof}>Financiar</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={keiraImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Keira Knightley</div>
                  <div className={styles.prof}>Farm Expert</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={scottImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Scott Lawrence</div>
                  <div className={styles.prof}>Farmer</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.team_card}>
              <div className={`${styles.team_img} ${styles._ibg}`}>
                <img src={karenImg} alt="Giovanni" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.desc}>
                  <div className={styles.name}>Karen Allen</div>
                  <div className={styles.prof}>Manager</div>
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram size={22} />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Newsletter />
    </>
  );
};

export default OurTeam;
