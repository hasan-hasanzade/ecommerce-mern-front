import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../../components/About/About';
import Products from '../../components/Products/Products';
import Testimonials from '../../components/Testimonials/Testimonials';
import Offer from '../../components/Offer/Offer';
import Eco from '../../components/Eco/Eco';
import Newsletter from '../../components/Newsletter/Newsletter';
import Banner from '../../components/Banner/Banner';
import BlogsBlock from '../../components/BlogsBlock/BlogsBlock';


const Home: React.FC = () => {
  return (
    <>
      <HeroSection /> 
      <Banner /> 
      <About />
      <Products />
      <Testimonials />
      <Offer />
      <Eco />
      <BlogsBlock />
      <Newsletter />
    </>

  )
}

export default Home