import React from 'react';
import styles from './login.module.scss';
import bg from '../../assets/img/login.jpg';
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { fetchLogin, selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: Record<string, string>) => {
    const data = await dispatch(fetchLogin(values));

    if (!data.payload) {
      alert('Cannot Log in');
    }

    if (fetchLogin.fulfilled.match(data)) {
      const token = data.payload.token;
      window.localStorage.setItem('token', token);
    } else if (fetchLogin.rejected.match(data)) {
      alert('Cannot Log in');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3>Log in</h3>
          <input
            className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
            type="text"
            placeholder="Email"
            {...register('email', { required: 'Enter your Email' })}
          />
          {errors.email?.message && <p className={styles.error}>Email is required.</p>}
          <input
            className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Enter your Password' })}
          />
          {errors.email?.message && <p className={styles.error}>Password is required.</p>}
          <div className={styles.btn}>
            <button className={styles.button}>Log In</button>
          </div>
          <div className={styles.social}>
            <div className={styles.icon}>
              <AiFillGoogleSquare size={20} /> Google
            </div>
            <div className={styles.icon}>
              <AiFillFacebook size={20} /> Facebook
            </div>
          </div>
        </form>
      </div>
      <div className={`${styles.image} ${styles._ibg}`}>
        <img src={bg} alt="" />
      </div>
    </section>
  );
};

export default Login;
