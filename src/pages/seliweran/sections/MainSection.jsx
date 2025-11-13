import React from 'react';
import MidSection from './MidSection';
import ListSection from './ListSection';

const MainSection = () => {
  return (
    <div
      style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '30px 60px',
      }}
    >
      <MidSection />
      <ListSection />
    </div>
  );
};

export default MainSection;
