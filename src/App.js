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
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';

import './scss/app.scss';

function App() {
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
        <Route path="/fullblog" element={<FullBlog />} />
        <Route path="/fullproduct" element={<FullProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
