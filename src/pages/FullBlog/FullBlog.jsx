import React from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import styles from './fullblog.module.scss';
import bg from '../../assets/img/full-blog/bgfullblog.jpg';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';
import axios from '../../axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
  const [data, setData] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:3333/blogs/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('cannot get blog');
      });
  }, [id]);

  const { title, imageUrl, author, text, date, month, mainText } = data;

  return (
    <>
      <section className={styles.image}>
        <div className={styles.img}>
          <img src={imageUrl} alt="" />
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.heading}>
            <div className={styles.body}>
              <div className={styles.top}>
                <div className={styles.posted}>
                  <span className={styles.top_text}>Posted On:</span>
                  <span className={styles.top_date}>
                    {month} {date}, 2023
                  </span>
                </div>
                <div className={styles.author}>
                  <span>by</span>
                  {author}
                </div>
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className={styles.texts}>
            <p>{mainText}</p>
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
          <CommentsBlock />
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default FullBlog;
