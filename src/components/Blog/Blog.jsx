import React from 'react';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './blog.module.scss';

const Blog = ({ title, imageUrl, author, text, date, month, _id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img className={styles.cardimg} src={imageUrl} alt="" />
        <div className={styles.circle}>
          <span>{date}</span>
          <span className={styles.month}>{month}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.inner}>
          <div className={styles.name}>
            {' '}
            <BsFillPersonFill color="#EFD372" /> {author}
          </div>
          <h4 className={styles.blogname}>{title}</h4>
          <p className={styles.text}>{text}</p>
          <Link to={`/blogs/${_id}`} className={styles.button}>
            Read More{' '}
            <span className={styles.arrow}>
              <BsFillArrowRightCircleFill />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
