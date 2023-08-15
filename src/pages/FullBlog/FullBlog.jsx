import React from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import styles from './fullblog.module.scss';
import bg from '../../assets/img/full-blog/bgfullblog.jpg';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';

const FullBlog = () => {
  return (
    <>
      <section className={styles.image}>
        <div className={styles.img}>
          <img src={bg} alt="" />
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.heading}>
            <div className={styles.body}>
              <div className={styles.top}>
                <span className={styles.top_text}>Posted On:</span>
                <span className={styles.top_date}>February 14, 2023</span>
              </div>
              <h2>Work Process Of Organic Farming</h2>
              <p>
                Podcasting on low-hanging fruit to identify a ballpark value added activity to beta
                test override matrix economically the digital. Efficiently on low-hanging fruit to
                identify a ballpark value added activity to beta test matrix economically override
                the digital. Objectively on low-hanging fruit to identify a ballpark value added
                activity to beta matrix economically.
              </p>
            </div>
          </div>
          <div className={styles.texts}>
            <p>
              Uniquely matrix economically sound value through cooperative technology. Competently
              parallel task fully researched data and enterprise process improvements.
              Collaboratively expedite quality manufactured products via client-focused results
              quickly communicate enabled technology and turnkey leadership skills. Uniquely enable
              accurate supply chains rather than friction technology.
            </p>
            <h3>Organic product for all peoples</h3>
            <p>
              Appropriately empower dynamic leadership skills after business portals. Globally my
              coordinate interactive supply chains with distinctive quality vectors global sources
              services. Uniquely matrix economically sound value through cooperative technology.
              Competently parallel task fully researched data and enterprise process improvements.
            </p>
            <ul>
              <li>Dynamically target high-payoff intellectual capital for customized</li>
              <li>Interactively procrastinate high-payoff content</li>
              <li>Credibly reinter mediate backend ideas for cross-platform models</li>
            </ul>
            <blockquote>
              “The first rule of any organic used in a business is that nature applied to an
              efficient operation will magnify the efficiency. The second is that organic applied to
              an inefficient operation will magnify the health.”
            </blockquote>
            <h6>Make perfect organic product with us</h6>
            <ol>
              <li>
                It brings the right people together with all the right information and tools to get
                work done
              </li>
              <li>We provide operational efficiency, data security, and flexible scale</li>
              <li>
                Your best work, together in one package that works seamlessly from your computer
              </li>
              <li>Delivers the tools you need to save time Improve field performance always</li>
            </ol>
          </div>
          <CommentsBlock/>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default FullBlog;
