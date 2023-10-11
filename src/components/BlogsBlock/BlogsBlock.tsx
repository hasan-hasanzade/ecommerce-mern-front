import React from 'react';
import styles from './blogs.module.scss';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { blogSelector, fetchBlogs } from '../../redux/slices/blogSlice';

const BlogsBlock: React.FC = () => {
  const { blogItems } = useSelector(blogSelector);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchBlogs());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <section className={styles.blogs}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.subtitle}>Blogs</div>
          <div className={styles.title}>
            <h2>
              Discover weekly content about <br /> organic food, & more
            </h2>
            <Link to="/blogs" className={styles.button}>
              More News{' '}
              <span className={styles.arrow}>
                <BsFillArrowRightCircleFill />
              </span>{' '}
            </Link>
          </div>
        </div>
        <div className={styles.body}>
          {blogItems.slice(2, 4).map((obj) => (
            <Blog key={obj._id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsBlock;
