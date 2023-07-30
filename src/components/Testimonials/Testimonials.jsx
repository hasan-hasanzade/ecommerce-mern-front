import React from 'react';
import styles from './testimonials.module.scss';
import sara from '../../assets/img/testimonial/sara.png';
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import bg from '../../assets/img/testimonial/bgtest.png';


const Testimonials = () => {

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      cssEase: "linear"
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
                           Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                           </p>
                           <div className={styles.name}>Sarah Taylor</div>
                           <div className={styles.role}>Consumer</div>
                  </div>
                  
               </Slider>
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
      </div>
      <div className={styles.image}>
            <img src={bg} alt="" />
      </div>
    </section>
  )
}

export default Testimonials