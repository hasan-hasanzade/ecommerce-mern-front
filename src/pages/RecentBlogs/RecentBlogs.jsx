import React from 'react';
import styles from './recentblogs.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import NewsLetter from '../../components/Newsletter/Newsletter';
import bg from '../../assets/img/blogs-page/bgblog.jpg';
import { BsFillArrowRightCircleFill, BsFillPersonFill } from 'react-icons/bs';
import salad from '../../assets/img/blogs/salad.png';
import tomato from '../../assets/img/blogs/tomato.png';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
  return (
   <>
   <PageBanner title={'Recent News'} img={bg}/>
      <section className={styles.blogs}>
         <div className="container">
         <div className={styles.body}>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={salad} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>Everything You Need to Know About Organic</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <Link to="/fullblog" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={tomato} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>Organic Fruits: Surprising Benefits and Facts</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <a href="/blogs" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={tomato} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>Organic Fruits: Surprising Benefits and Facts</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <a href="/blogs" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.picture}>
                  <img className={styles.cardimg} src={tomato} alt="" />
                  <div className={styles.circle}>
                     <span>25</span>
                     <span>Nov</span>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.inner}>
                     <div className={styles.name}> <BsFillPersonFill color='#EFD372' /> By Rachi Card</div>
                     <h4 className={styles.blogname}>Organic Fruits: Surprising Benefits and Facts</h4>
                     <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                     </p>
                     <a href="/blogs" className={styles.btn}>
                     Read More <span className={styles.arrow}><BsFillArrowRightCircleFill /></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </section>
    <NewsLetter />
   </>
  )
}

export default RecentBlogs;