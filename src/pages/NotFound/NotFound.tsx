import React from 'react';
import styles from './notfound.module.scss';
import bg from '../../assets/img/notfound-page/error.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <section className={styles.notfound}>
      <div className={`${styles.image} ${styles._ibg}`}>
         <img src={bg} alt="" />
      </div>
      <div className="container">
         <div className={styles.content}>
            <div className={styles.heading}>
               <h2>404</h2>
               <h4>Page Not Found</h4>
               <p>The page you are looking for doesn't exist or has been moved</p>
               <button className={styles.button}>
                <Link to="/" className={styles.btn}>
                  Go To Home Page{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>{' '}
                </Link>
              </button>
            </div>
         </div>
      </div>
    </section>
  )
}

export default NotFound;