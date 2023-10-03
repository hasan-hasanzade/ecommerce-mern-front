import React from 'react';
import sara from '../../assets/img/testimonial/sara.png';
import chris from '../../assets/img/testimonial/chris.jpg';
import jenny from '../../assets/img/testimonial/jenny.jpg';
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import bg from '../../assets/img/testimonial/bgtest.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './testimonials.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Testimonials = () => {
  let slidesToShow = 1;
  const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <>
        <div className={className} onClick={onClick}>
          <AiOutlineLeft style={{ color: '#274C5B', fontSize: '50px' }} />
        </div>
      </>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    console.log(props);
    return (
      <>
        <div className={className} onClick={onClick}>
          <AiOutlineRight style={{ color: '#274C5B', fontSize: '50px' }} />
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 664,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.subtitle}>Testimonials</div>
          <h3 className={styles.title}>What Our Customer Saying?</h3>
          <div className={styles.content}>
            <Slider {...settings}>
              <div className={styles.item}>
                <div className={styles.user}>
                  <img src={sara} alt="consumer" />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  The quality of organic produce is extremely high, the service is second to none
                  and the taste of the food takes me back to my childhood when we were growing our
                  own.
                </p>
                <div className={styles.name}>Sarah Taylor</div>
                <div className={styles.role}>Consumer</div>
              </div>
              <div className={styles.item}>
                <div className={styles.user}>
                  <img src={chris} alt="consumer" />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  I have been using the Organic Grocer for over a year now and I find the staff
                  friendly and helpful with a good knowledge of the products they sell.
                </p>
                <div className={styles.name}>Chris Jordan</div>
                <div className={styles.role}>Store Owner</div>
              </div>
              <div className={styles.item}>
                <div className={styles.user}>
                  <img src={jenny} alt="consumer" />
                </div>
                <div className={styles.rating}>
                  <Rating name="read-only" defaultValue={5} precision={0.5} readOnly />
                </div>
                <p className={styles.text}>
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply
                  dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
                <div className={styles.name}>Jenny Larson</div>
                <div className={styles.role}>Consumer</div>
              </div>
            </Slider>
          </div>
        </div>
        <div className={styles.countup}>
          <div className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={100} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                %
              </div>
              <div className={styles.desc}>Organic</div>
            </div>
          </div>
          <div className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={285} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <div className={styles.desc}>Active Product</div>
            </div>
          </div>
          <div className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={350} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </div>
              <div className={styles.desc}>Organic Orchads</div>
            </div>
          </div>
          <div className={styles.green}>
            <div className={styles.gray}>
              <div className={styles.count}>
                <CountUp end={25} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </div>
              <div className={styles.desc}>Years of Farming</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <img src={bg} alt="" />
      </div>
    </section>
  );
};

export default Testimonials;
