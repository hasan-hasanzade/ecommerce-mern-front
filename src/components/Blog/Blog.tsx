import React from 'react';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './blog.module.scss';
import img from '../../assets/img/skel.jpg';
import { motion } from 'framer-motion';
import { forwardRef, Ref} from 'react';

type BlogProps = {
  title: string;
  imageUrl: string;
  author: string;
  text: string;
  date: number;
  month: string;
  _id: string;
};

export const Blog: React.FC<BlogProps> = forwardRef(({ title, imageUrl, author, text, date, month, _id }, ref: Ref<HTMLDivElement>) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [imageUrl]);
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.picture}>
        {imageLoaded ? (
          <img className={styles.cardimg} src={imageUrl} alt="" />
        ) : (
          <img className={styles.cardimg} src={img} alt="" />
        )}
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
});

export const MBlog = motion(Blog);
