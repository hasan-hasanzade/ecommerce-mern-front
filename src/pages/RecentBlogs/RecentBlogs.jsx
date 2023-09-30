import React from 'react';
import styles from './recentblogs.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import NewsLetter from '../../components/Newsletter/Newsletter';
import bg from '../../assets/img/blogs-page/bgblog.jpg';
import axios from '../../axios';
import Blog from '../../components/Blog/Blog';
import { setBlogItems } from '../../redux/slices/blogSlice';
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from './BlogSkeleton';

const RecentBlogs = () => {
   const [isLoading, setIsLoading] = React.useState(true);

   const dispatch = useDispatch();

   const blogs = useSelector((state) => state.blogs.blogItems)
   
   


  React.useEffect(() => {
    axios.get('http://localhost:3333/blogs').then((res) => {
      setIsLoading(false);
      dispatch(setBlogItems(res.data));
    });
  });

  return (
    <>
      <PageBanner title={'Recent News'} img={bg} />
      <section className={styles.blogs}>
        <div className="container">
          <div className={styles.body}>
          {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : blogs.map((obj) => <Blog key={obj._id} {...obj} />)}
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default RecentBlogs;
