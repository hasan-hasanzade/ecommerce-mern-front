import React from 'react';
import styles from './recentblogs.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import NewsLetter from '../../components/Newsletter/Newsletter';
import bg from '../../assets/img/blogs-page/bgblog.jpg';
import { MBlog } from '../../components/Blog/Blog';
import { blogSelector } from '../../redux/blog/selectors';
import { fetchBlogs } from '../../redux/blog/asyncActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import Skeleton from './BlogSkeleton';

const RecentBlogs: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  const blogs = useSelector(blogSelector);

  React.useEffect(() => {
    setIsLoading(true);

    dispatch(fetchBlogs())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading blogs:', error);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <PageBanner title={'Recent News'} img={bg} />
      <section className={styles.blogs}>
        <div className="container">
          <div className={styles.body}>
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : blogs.map((obj) => (
                  <div className={styles.blogCard} key={obj._id}>
                    <MBlog {...obj} />
                  </div>
                ))}
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default RecentBlogs;
