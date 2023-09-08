import React from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import styles from './fullproduct.module.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const FullProduct = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState();

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:3333/items/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('cannot get an item');
      });
  }, [id]);

  console.log(data);

  return (
    <>
      <section className={styles.product}>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.body}>
              <div className={styles.image}>
                <img src={data.imageUrl} alt="" />
                <div className={styles.category}>
                  <span>{data.category}</span>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.rating}>
                <Rating
                  name="half-rating-read"
                  value={data.rating ?? " "}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className={styles.prices}>
                <span className={styles.old}>${data.oldPrice}</span>
                <span className={styles.new}>${data.newPrice}</span>
              </div>
              <p className={styles.desc}>
                Calabrese is an old-fashioned variety of broccoli renowned for its bluish-green
                heads and multiple side shoots. It can be grown as an early spring or fall crop. Its
                flavorful five-inch.
              </p>
              <div className={styles.action}>
                <span className={styles.quan}>Quantity:</span>
                <input value={1} type="number" />
                <button className={styles.add}>
                  Add To Cart{' '}
                  <span className={styles.arrow}>
                    <BsFillArrowRightCircleFill />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.additional}>
        <div className="container">
          <div className={styles.buttons}>
            <button className={`${styles.active_btn} ${styles.btn}`}>Product Description</button>
            <button className={styles.btn}>Additional Info</button>
          </div>
          <p className={styles.text}>
            Welcome to the world of natural and organic. Here you can discover the bounty of nature.
            We have grown on the principles of health, ecology, and care. We aim to give our
            customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs
            in raw.
          </p>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default FullProduct;
