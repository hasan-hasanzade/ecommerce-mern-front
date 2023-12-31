import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import OurTeam from './pages/OurTeam/OurTeam';
import RecentBlogs from './pages/RecentBlogs/RecentBlogs';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import FullBlog from './pages/FullBlog/FullBlog';
import FullProduct from './pages/FullProduct/FullProduct';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import Checkout from './pages/CheckOut/CheckOut';
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './redux/store';
import './scss/app.scss';
import { selectIsAuth } from './redux/auth/selectors';
import { fetchAuthMe } from './redux/auth/asyncActions';


function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blogs" element={<RecentBlogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs/:id" element={<FullBlog />} />
        <Route path="/items/:id" element={<FullProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
