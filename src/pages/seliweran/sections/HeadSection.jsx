import React from 'react';
import headBanner from '../../../assets/img/umkmBanner.svg'; // nanti kamu ganti sesuai nama file svg kamu

const HeadSection = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <img
        src={headBanner}
        alt="UMKM Banner"
        style={{
          width: '100%',
          objectFit: 'cover',
          height: '500px',
        }}
      />
    </div>
  );
};

export default HeadSection;
