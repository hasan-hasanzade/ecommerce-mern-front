import React from 'react';
import logo from '../../assets/img/logo.png';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/userg.png';
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector } from '../../redux/cart/selectors';
import styles from './navbar.module.scss';
import { authData, selectIsAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/slice';

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isRed, setIsRed] = React.useState(false);
  const isMounted = React.useRef(false);

  const isAuth = useSelector(selectIsAuth);
  const isAuthData = useSelector(authData);

  const avatarUrl = isAuthData?.avatarUrl;
  const userName = isAuthData?.fullName;

  const dispatch = useDispatch();

  const items = useSelector(cartSelector);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  React.useEffect(() => {
    if (totalCount) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  }, [totalCount]);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNav);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleCartOpen = () => {
    setCartOpened(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCartClose = () => {
    setCartOpened(false);
    document.body.style.overflow = '';
  };

  const onClickLogOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      dispatch(logOut());
      window.localStorage.removeItem('token');
    }
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={navbar ? styles['header-scroll'] : styles['header']}>
      <Cart items={items} totalPrice={totalPrice} onClose={handleCartClose} opened={cartOpened} />
      <div className={styles.body}>
        <Link to="/" className={styles.logo}>
          <img className={styles.image} src={logo} alt="logo" />
          <div className={styles.text}>Organic</div>
        </Link>
        <nav className={isOpen ? styles['nav-active'] : styles['nav']}>
          <ul className={styles.menu}>
            <li className={styles.list}>
              <Link className={styles.item} onClick={closeBurgerMenu} to="/">
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} onClick={closeBurgerMenu} to="/about">
                About
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} onClick={closeBurgerMenu} to="/shop">
                Shop
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} onClick={closeBurgerMenu} to="/blogs">
                Blog
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} onClick={closeBurgerMenu} to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.bar}>
          <div className={styles.cart}>
            <button onClick={handleCartOpen} className={styles.outcart}>
              <AiOutlineShoppingCart className={styles.shopping} color="white" size={24} />
              <span className={isRed && styles.red}>{totalCount}</span>
            </button>
          </div>
          {isAuth ? (
            <>
              <Link to="#" className={styles.loginAuth}>
                <div className={styles.inner}>
                  <p className={styles.userName}>{userName}</p>
                  {avatarUrl ? (
                    <img
                      className={styles.userImage}
                      src={`http://localhost:3333${avatarUrl}`}
                      alt=""
                    />
                  ) : (
                    <img className={styles.userImage} src={profile} alt="" />
                  )}
                </div>
              </Link>
              <Link to="#" className={styles.authMob}>
                {avatarUrl ? (
                  <img
                    className={styles.userMob}
                    src={`http://localhost:3333${avatarUrl}`}
                    alt=""
                  />
                ) : (
                  <img className={styles.userMob} src={profile} alt="" />
                )}
              </Link>
              <div className={styles.sign}>
                <div className={styles.inner} onClick={onClickLogOut}>
                  Sign out
                  <BiLogOut className={styles.aiout} size={24} />
                </div>
              </div>
              <div className={styles.sign_mob}>
                <div className={styles.inner} onClick={onClickLogOut}>
                  <BiLogOut className={styles.ai_mob} size={24} />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.login}>
                <div className={styles.inner}>
                  Log in
                  <AiOutlineLogin className={styles.aiout} size={24} />
                </div>
              </Link>
              <Link to="/login" className={styles.login_mob}>
                <div className={styles.inner}>
                  <AiOutlineLogin className={styles.ai_mob} size={24} />
                </div>
              </Link>
              <Link to="/register" className={styles.sign}>
                <div className={styles.inner}>
                  Sign up
                  <BsFillPersonFill className={styles.aiout} size={24} />
                </div>
              </Link>
              <Link to="/register" className={styles.sign_mob}>
                <div className={styles.inner}>
                  <BsFillPersonFill className={styles.ai_mob} size={24} />
                </div>
              </Link>
            </>
          )}
          <div className={styles.burger_wrap}>
            <div
              onClick={handleBurger}
              className={isOpen ? styles['burger-open'] : styles['burger']}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
