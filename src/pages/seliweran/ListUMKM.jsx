import React from 'react';
import HeadSection from './sections/HeadSection';
import MainSection from './sections/MainSection';
import Footer from "../../components/Footer/Footer"

const ListUMKM = () => {
  return (
    <div style={{ background: '#f9f9f9', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      <HeadSection />
      <MainSection/>
      <Footer/>
    </div>
  );
};

export default ListUMKM;
