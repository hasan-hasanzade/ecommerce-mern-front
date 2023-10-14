import React from 'react';
import styles from './recentblogs.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import NewsLetter from '../../components/Newsletter/Newsletter';
import bg from '../../assets/img/blogs-page/bgblog.jpg';
import Blog from '../../components/Blog/Blog';
import { blogSelector, fetchBlogs } from '../../redux/slices/blogSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import Skeleton from './BlogSkeleton';

const RecentBlogs: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  const blogs = useSelector(blogSelector);

  React.useEffect(() => {
    dispatch(fetchBlogs());
    setIsLoading(false);
  }, []);

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
                    <Blog {...obj} />
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
