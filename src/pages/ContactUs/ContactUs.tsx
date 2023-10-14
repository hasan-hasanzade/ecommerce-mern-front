import React from 'react';
import styles from './contactus.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import Newsletter from '../../components/Newsletter/Newsletter';
import bg from '../../assets/img/contact-page/bgcontact.jpg';
import instagram from '../../assets/img/footer/inst.png';
import facebook from '../../assets/img/footer/fb.png';
import twitter from '../../assets/img/footer/tw.png';
import printerest from '../../assets/img/footer/pr.png';
import fruits from '../../assets/img/contact-page/fruits.jpg';
import message from '../../assets/img/contact-page/icon1.svg';
import phone from '../../assets/img/contact-page/icon2.svg';
import location from '../../assets/img/contact-page/icon3.svg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ContactUs: React.FC = () => {
  return (
    <>
      <PageBanner title={'Contact Us'} img={bg} />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.image}>
              <img src={fruits} alt="" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h2 className={styles.title}>Let's Find Out. Where Our Organic Farms Located.</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Please contact us using the information below. To locate, contact us in the <br />
                  nearest organic store or office closest to you, visit our office websites.
                </p>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={message} alt="" />
                  </div>
                  <div className={styles.desc}>
                    <h5>Message</h5>
                    <span>support@organic.com</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={phone} alt="" />
                  </div>
                  <div className={styles.desc}>
                    <h5>Contact Us</h5>
                    <span>+01 123 456 789</span>
                  </div>
                </div>
              </div>
              <div className={styles.social}>
                <a href="https.instagram.com">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https.instagram.com">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https.instagram.com">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https.instagram.com">
                  <img src={printerest} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.location}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.loc_body}>
              <div className={styles.loc_inner}>
                <div className={styles.heading}>
                  <h4 className={styles.subtitle}>Location</h4>
                  <h2 className={styles.title}>Our Farms</h2>
                </div>
                <div className={styles.text}>
                  <p>
                    Organick product farms are located in <br />
                    main cities of the following places.
                  </p>
                </div>
                <div className={styles.loc_items}>
                  <div className={styles.loc_item}>
                    <div className={styles.loc_img}>
                      <img src={location} alt="" />
                    </div>
                    <div className={styles.loc_desc}>
                      <h5>New York, USA:</h5>
                      <span>
                        299 Park Avenue New York, <br />
                        New York 10171, USA.
                      </span>
                    </div>
                  </div>
                  <div className={styles.loc_item}>
                    <div className={styles.loc_img}>
                      <img src={location} alt="" />
                    </div>
                    <div className={styles.loc_desc}>
                      <h5>London, UK:</h5>
                      <span>
                        30 Stamford Street, Base Way, <br />
                        London 5478, UK.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <form className={styles.form}>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Full Name*</label>
                <input className={styles.input} type="text" maxLength={256} name="name" placeholder="Enter your name" />
              </div>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Full Adress*</label>
                <input className={styles.input} type="text" maxLength={256} name="name" placeholder="Enter your email" />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Company*</label>
                <input className={styles.input} type="text" maxLength={256} name="name" placeholder="Enter Company Name" />
              </div>
              <div className={styles.inputItem}>
                <label htmlFor="full-name">Subject</label>
                <input className={styles.input} type="text" maxLength={256} name="name" placeholder="How We Can Help You" />
              </div>
            </div>
            <div className={styles.areaItem}>
              <textarea className={styles.area} placeholder="Hello there, I would like to..."></textarea>
            </div>
            <div className={styles.action}>
                <a href="/shop" className={styles.button}>
                  Send Message{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>{' '}
                </a>
              </div>
          </form>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default ContactUs;
