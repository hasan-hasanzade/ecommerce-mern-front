import React from 'react';
import styles from './aboutus.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import salad from '../../assets/img/about-page/hero.png';
import tractor from '../../assets/img/about-page/Tractor.png';
import chemical from '../../assets/img/about-page/chemical-plant.png';
import greenImg from '../../assets/img/about-page/green.jpg';
import returnIcon from '../../assets/img/about-page/return-purchase.png';
import naturalIcon from '../../assets/img/about-page/natural-food.png';
import supportIcon from '../../assets/img/about-page/phone-time.png';
import securedIcon from '../../assets/img/about-page/card-security.png';
import shaneImg from '../../assets/img/about-page/giovani.jpg';
import mariaImg from '../../assets/img/about-page/maria.jpg';
import angelineImg from '../../assets/img/about-page/riga.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';
import Offer from '../../components/Offer/Offer';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const AboutUs = () => {
  return (
    <>
      <PageBanner />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.image}>
              <img src={salad} alt="" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h4 className={styles.subtitle}>Only pure and organic</h4>
                <h2 className={styles.title}>
                  Fresh from farm <br /> Return to purity
                </h2>
              </div>
              <div className={styles.texts}>
                <p>
                  Our rich experience helps us in ensuring that the products brought to you are 100%
                  chemical-free. To live a better, healthier, and wholesome life by providing them
                  with 100% certified, authentic organic food.
                </p>
                <p>
                  Welcome to the world of nature and organic. Here you can discover the bounty of
                  nature. We have grown on the principles of health and care. We aim to give our
                  customers a healthy chemical-free meal for perfect nutrition.{' '}
                </p>
              </div>
              <div className={styles.priority}>
                <div className={styles.item}>
                  <div className={styles.trac}>
                    <img src={tractor} alt="" />
                  </div>
                  <h5 className={styles.text}>
                    Modern Agriculture <br />
                    Equipmnet
                  </h5>
                </div>
                <div className={styles.item}>
                  <div className={styles.chem}>
                    <img src={chemical} alt="" />
                  </div>
                  <h5 className={styles.text}>
                    No Chemicals & <br />
                    Hormones Are Used
                  </h5>
                </div>
              </div>
              <div className={styles.button}>
                <a href="/shop" className={styles.btn}>
                  Explore More{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.store}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.store_body}>
              <div className={styles.heading}>
                <h2 className={styles.subtitle}>Why Organick Store?</h2>
                <h5 className={styles.title}>
                  We Cultivating the chemical & <br /> Fertilizer Free Products
                </h5>
              </div>
              <p className={styles.texts}>
                After a lot of struggles in our lives, we now are popular and now we are producing
                the best organic products. Initially.
              </p>
              <div className={styles.store_content}>
                <div className={styles.store_wrap}>
                  <h6 className={styles.store_title}>100% Natural Product</h6>
                </div>
                <div className={styles.texts}>
                  <p className={styles._pl}>
                    In our listing, we have several collections of organic products and <br /> place
                    where you need to choose the product you want.{' '}
                  </p>
                </div>
                <div className={styles.store_wrap}>
                  <h6 className={styles.store_title}>Same Day Delivery</h6>
                </div>
                <div className={styles.texts}>
                  <p className={styles._pl}>
                    If you are not comfortable going to the nearby market place we <br /> also will
                    deliver your product to your doorstep.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.store_image}>
              <img src={greenImg} alt="green products" />
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <img src={returnIcon} alt="" />
                </div>
                <h6>Return Policy</h6>
                <p>If the product having any issues you can return the product.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <img src={naturalIcon} alt="" />
                </div>
                <h6>100% Fresh</h6>
                <p>Fully organic and fresh products are delivered at door step.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <img src={supportIcon} alt="" />
                </div>
                <h6>Support 24/7</h6>
                <p>Our support team is available for take care the customers.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <img src={securedIcon} alt="" />
                </div>
                <h6>Secured Payment</h6>
                <p>Fully secured payment methods are used for buying product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className="container">
          <div className={styles.heading}>
            <h2 className={styles.subtitle}>The Team</h2>
            <h5 className={styles.title}>Our Organic Experts</h5>
            <p>
              We have grown on the principles of health, ecology, and care. We aim to give our{' '}
              <br />
              customers a healthy chemical-free meal for perfect nutrition.
            </p>
          </div>
          <div className={styles.team_cards}>
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
          </div>
        </div>
      </section>
      <Newsletter />
      <Offer />
    </>
  );
};

export default AboutUs;
