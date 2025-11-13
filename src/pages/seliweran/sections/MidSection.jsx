import React from 'react';

const MidSection = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20 }}>
        Semua UMKM di Sekitar Kamu
      </h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {['Jenis UMKM', 'Termurah', 'Terdekat', 'Rating 4.5+'].map((label, i) => (
          <button
            key={i}
            style={{
              padding: '8px 16px',
              background: '#fff',
              border: '1.5px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 500,
            }}
            onClick={() => console.log(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
