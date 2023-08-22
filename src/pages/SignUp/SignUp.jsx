import React from 'react';
import styles from './sign.module.scss';
import bg from '../../assets/img/bgsign.jpg';
import user from '../../assets/img/userg.png';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';

const SignUp = () => {
  return (
   <section className={styles.sign}>
   <div className={styles.background}>
     {/* <div className={styles.shape}></div>
     <div className={styles.shape}></div> */}
   </div>
   <div className={`${styles.image} ${styles._ibg}`}>
      <img src={bg} alt="" />
   </div>
   <form className={styles.form}>
     <h3>Sign Up</h3>

     <div className={styles.user}><img src={user} alt="" /></div>

     <label for="username">Username</label>
     <input className={styles.input} type="text" placeholder="Username"/>

     <label for="username">Email</label>
     <input className={styles.input} type="text" placeholder="Email" />

     <label for="password">Password</label>
     <input className={styles.input} type="password" placeholder="Password" />
      <div className={styles.btn}>
      <button className={styles.button}>Sign In</button>
      </div>
     <div className={styles.social}>
       <div className={styles.icon}>
         <AiFillGoogleCircle size={20} /> Google
       </div>
       <div className={styles.icon}>
         < BsFacebook size={18}/> Facebook
       </div>
     </div>
   </form>
 </section>
  )
}

export default SignUp