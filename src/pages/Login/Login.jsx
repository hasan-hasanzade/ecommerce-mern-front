import React from 'react';
import styles from './login.module.scss';
import bg from '../../assets/img/login.jpg';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '111test@test.ru',
      password: '12345',
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

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <img src={bg} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input
          className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
          type="text"
          placeholder="Email"
          {...register('email', { required: 'Enter your Email' })}
          error={Boolean(errors.email?.message)}
        />
        {errors.email?.message && <p className={styles.error}>Email is required.</p>}
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Enter your Password' })}
          error={Boolean(errors.email?.message)}
        />
        {errors.email?.message && <p className={styles.error}>Password is required.</p>}
        <div className={styles.btn}>
          <button className={styles.button}>Log In</button>
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

export default Login;
