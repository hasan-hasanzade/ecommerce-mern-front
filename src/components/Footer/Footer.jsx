import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/img/logo.png';
import instagram from '../../assets/img/footer/inst.png';
import facebook from '../../assets/img/footer/fb.png';
import twitter from '../../assets/img/footer/tw.png';
import printerest from '../../assets/img/footer/pr.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.contact}>
            <h5 className={styles.title}>Contact Us</h5>
            <div className={styles.content}>
              <div className={styles.item}>
                <div className={styles.heading}>Email</div>
                <div className={styles.text}>support@Organia.com</div>
              </div>
              <div className={styles.item}>
                <div className={styles.heading}>Phone</div>
                <div className={styles.text}>777 8888 599</div>
              </div>
              <div className={styles.item}>
                <div className={styles.heading}>Address</div>
                <div className={styles.text}>88 road, Brooklyn street USA</div>
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.block}>
              <img className={styles.image} src={logo} alt="logo" />
              <div className={styles.comp}>Organick</div>
            </div>
            <p className={styles.desc}>
              Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply
              dummy text of the printing
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.pinterest.com/">
                <img src={printerest} alt="printerest" />
              </a>
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.title}>Pages</div>
            <div className={styles.links}>
              <Link to="/team" className={styles.link}>
                Our Team
              </Link>
              <Link to="/services" className={styles.link}>
                Services
              </Link>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
              <Link to="/blogs" className={styles.link}>
                Blogs
              </Link>
              <Link to="/contact" className={styles.link}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          Copyright &#169; Organic | Designed by{' '}
          <a href="/#" className={styles.btn}>
            VictorFlow
          </a>{' '}
          - Powered by{' '}
          <a className={styles.btn} href="https://hasanzade.net/">
            Hasan Hasanzade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
