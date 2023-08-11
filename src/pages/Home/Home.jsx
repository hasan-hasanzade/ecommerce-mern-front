import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../../components/About/About';
import Products from '../../components/Products/Products';
import Testimonials from '../../components/Testimonials/Testimonials';
import Offer from '../../components/Offer/Offer';
import Eco from '../../components/Eco/Eco';
import Blogs from '../../components/Blogs/Blogs';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';


const Home = () => {
  return (
    <>
      <HeroSection /> 
      <Banner /> 
      <About />
      <Products />
      <Testimonials />
      <Offer />
      <Eco />
      <Blogs />
      <Newsletter />
      <Footer />
    </>

  )
}

export default Home