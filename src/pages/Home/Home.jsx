import React from 'react'
import HeroSection from './HeroSection'
import Footer from "../../components/Footer/Footer"
import UMKMSection from './UMKMSection'
import CardSection from './CardSection'
import TestimonialSection from './TestimonialSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <UMKMSection />
      <CardSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home