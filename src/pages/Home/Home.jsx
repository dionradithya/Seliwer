import React from 'react'
import HeroSection from './HeroSection'
import Footer from "../../components/Footer/Footer"
import UMKMSection from './UMKMSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <UMKMSection />
      <Footer />
    </div>
  );
};

export default Home