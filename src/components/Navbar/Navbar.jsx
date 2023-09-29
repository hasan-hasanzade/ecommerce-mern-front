import React from 'react';
import logo from '../../assets/img/logo.png';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './navbar.module.scss';
import { authData, logOut, selectIsAuth } from '../../redux/slices/authSlice';

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isRed, setIsRed] = React.useState(false);

  const isAuth = useSelector(selectIsAuth);
  const isAuthData = useSelector(authData)


  const avatarUrl = isAuthData?.avatarUrl;
  const userName = isAuthData?.fullName;


  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  React.useEffect(() => {
    if (totalCount) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  }, [totalCount]);

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
      dispatch(logOut())
      window.localStorage.removeItem('token')
    }
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
              <Link className={styles.item} to="/">
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} to="/about">
                About
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} to="/shop">
                Shop
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} to="/blogs">
                Blog
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.item} to="/contact">
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
              <Link to="login" className={styles.login}>
                <button>
                  <p className={styles.userName}>{userName}</p>
                  <img className={styles.userImage} src={`http://localhost:3333${avatarUrl}`} alt="" />
                </button>
              </Link>
              <Link to="#login" className={styles.login_mob}>
                <button>
                  <CgProfile className={styles.ai_mob} ai size={24} />
                </button>
              </Link>
              <div className={styles.sign}>
                <button onClick={onClickLogOut}>
                  Sign out
                  <BiLogOut className={styles.aiout} ai size={24} />
                </button>
              </div>
              <div className={styles.sign_mob}>
                <button onClick={onClickLogOut}>
                  <BiLogOut className={styles.ai_mob} ai size={24} />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="login" className={styles.login}>
                <button>
                  Log in
                  <AiOutlineLogin className={styles.aiout} ai size={24} />
                </button>
              </Link>
              <Link to="#login" className={styles.login_mob}>
                <button>
                  <AiOutlineLogin className={styles.ai_mob} ai size={24} />
                </button>
              </Link>
              <Link to="signup" className={styles.sign}>
                <button>
                  Sign up
                  <BsFillPersonFill className={styles.aiout} ai size={24} />
                </button>
              </Link>
              <Link to="signup" className={styles.sign_mob}>
                <button>
                  <BsFillPersonFill className={styles.ai_mob} ai size={24} />
                </button>
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
