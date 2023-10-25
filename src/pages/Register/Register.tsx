import React from 'react';
import styles from './register.module.scss';
import bg from '../../assets/img/bgsign.jpg';
import user from '../../assets/img/userg.png';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { selectIsAuth, selectorUserImg } from '../../redux/auth/selectors';
import { setUserImageUrl } from '../../redux/auth/slice';
import { fetchRegister } from '../../redux/auth/asyncActions';
import axios from '../../axios';

const Register: React.FC = () => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const isAuth = useSelector(selectIsAuth);

  const { userImageUrl } = useSelector(selectorUserImg);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: 'Abrams',
      email: 'abrams@test.ru',
      password: '123456',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: Record<string, string>) => {
    const dataToSend = {
      ...values,
      userImageUrl: userImageUrl,
    };

    const data = await dispatch(fetchRegister(dataToSend));

    if (!data.payload) {
      alert('Cannot Register');
    }

    if (fetchRegister.fulfilled.match(data)) {
      const token = data.payload.token;
      window.localStorage.setItem('token', token);
    } else if (fetchRegister.rejected.match(data)) {
      alert('Cannot Register');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      const file = e.target.files?.[0];
      if (file !== undefined) {
        formData.append('image', file);

        const { data } = await axios.post('/upload', formData);

        dispatch(setUserImageUrl(data.url));
      } else {
        alert('No file selected');
      }
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
          {userImageUrl ? (
            <>
              {/* <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                Delete
              </Button> */}
              <img
                className={styles.userImage}
                src={`http://localhost:3333${userImageUrl}`}
                alt="user"
              />
            </>
          ) : (
            <>
              <img onClick={() => inputFileRef.current?.click()} src={user} alt="" />
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

export default Register;
