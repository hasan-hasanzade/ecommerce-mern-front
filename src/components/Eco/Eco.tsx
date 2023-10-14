import React from 'react';
import styles from './eco.module.scss';
import bg from '../../assets/img/eco/bgeco.jpg';

const Eco: React.FC = () => {
  return (
    <section className={styles.eco}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={bg} alt="background" />
        </div>
        <div className={styles.body}>
          <div className={styles.inner}>
            <div className={styles.subtitle}>Eco Friendly</div>
            <h2 className={styles.title}>
              Econis is a Friendly <br /> Organic Store
            </h2>
            <div className={styles.content}>
              <div className={styles.item}>
                <h5 className={styles.heading}>Start with Our Company First</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className={styles.item}>
                <h5 className={styles.heading}>Learn How to Grow Yourself</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className={styles.item}>
                <h5 className={styles.heading}>Farming Strategies of Today</h5>
                <p className={styles.text}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                  doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco;
