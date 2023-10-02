import React from 'react';
import styles from './blogs.module.scss';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import salad from '../../assets/img/blogs/salad.png';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import { setBlogItems } from '../../redux/slices/blogSlice';

const BlogsBlock = () => {
  const blogs = useSelector((state) => state.blogs.blogItems);

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3333/blogs').then((res) => {
      dispatch(setBlogItems(res.data));
    });
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
          {blogs.slice(2, 4).map((obj) => (
            <Blog key={obj._id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsBlock;
