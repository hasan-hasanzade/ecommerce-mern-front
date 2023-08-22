import React from 'react';
import styles from './login.module.scss';
import bg from '../../assets/img/loginbg.jpg';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.background}>
        {/* <div className={styles.shape}></div>
        <div className={styles.shape}></div> */}
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
         <img src={bg} alt="" />
      </div>
      <form className={styles.form}>
        <h3>Login</h3>

        <label for="username">Username</label>
        <input className={styles.input} type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input className={styles.input} type="password" placeholder="Password" id="password" />
         <div className={styles.btn}>
         <button className={styles.button}>Log In</button>
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
  );
};

export default Login;
