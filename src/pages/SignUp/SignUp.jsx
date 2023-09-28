import React from 'react';
import styles from './sign.module.scss';
import bg from '../../assets/img/bgsign.jpg';
import user from '../../assets/img/userg.png';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchRegister, selectIsAuth } from '../../redux/slices/authSlice';
import axios from '../../axios';

const SignUp = () => {
  const [imageUrl, setImageUrl] = React.useState('');
  const inputFileRef = React.useRef(null);
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
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
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert('Cannot Register');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);

      const { data } = await axios.post('/upload', formData);

      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Failed to upload file');
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
          {imageUrl ? (
            <>
              {/* <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                Delete
              </Button> */}
              <img
                className={styles.userImage}
                src={`http://localhost:3333${imageUrl}`}
                alt="Uploaded"
              />
            </>
          ) : (
            <>
              <img onClick={() => inputFileRef.current.click()} src={user} alt="" />
              <input ref={inputFileRef} onChange={handleChangeFile} type="file" hidden />
            </>
          )}
        </div>

        <input
          className={`${styles.input} ${errors.fullName ? styles['errorBorder'] : ''}`}
          type="text"
          {...register('fullName', { required: 'Enter your full name' })}
        />
        {errors.fullName?.message && <p className={styles.error}>Name is required.</p>}
        <input
          className={`${styles.input} ${errors.email ? styles['errorBorder'] : ''}`}
          type="email"
          {...register('email', { required: 'Enter your Email' })}
        />
        {errors.email?.message && <p className={styles.error}>Email is required.</p>}
        <input
          className={`${styles.input} ${errors.password ? styles['errorBorder'] : ''}`}
          type="password"
          {...register('password', { required: 'Enter your password' })}
        />
        {errors.password?.message && <p className={styles.error}>Password is required.</p>}
        <div className={styles.btn}>
          <button disabled={!isValid} type="submit" className={styles.button}>
            Sign In
          </button>
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
