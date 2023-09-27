import React from 'react';
import styles from './sign.module.scss';
import bg from '../../assets/img/bgsign.jpg';
import user from '../../assets/img/userg.png';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchLogin, selectIsAuth } from '../../redux/slices/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: 'Abrams',
      email: 'abrams@test.ru',
      password: '1234',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));
    console.log('Data after login:', data);

    if (!data.payload) {
      alert('Cannot Log in');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  return (
    <section className={styles.sign}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <img src={bg} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Sign Up</h3>

        <div className={styles.user}>
          <img src={user} alt="" />
        </div>

        <input
          className={`${styles.input} ${errors.fullName ? styles['errorBorder'] : ''}`}
          type="text"
          {...register('fullName', { required: 'Enter your full name' })}
        />
        <input  className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
          type="text"
          {...register('email', { required: 'Enter your Email' })} />
        <input className={`${styles.input} ${errors.password ? styles['errorBorder'] : ''}`}
          type="text"
          {...register('password', { required: 'Enter your password' })} />
        <div className={styles.btn}>
          <button type='submit' className={styles.button}>Sign In</button>
        </div>
        <div className={styles.social}>
          <div className={styles.icon}>
            <AiFillGoogleCircle size={20} /> Google
          </div>
          <div className={styles.icon}>
            <BsFacebook size={18} /> Facebook
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
