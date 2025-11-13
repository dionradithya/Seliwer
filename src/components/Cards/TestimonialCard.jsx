import React from 'react';

const TestimonialCard = ({ text, name, role, image }) => {
  return (
    <div
      style={{
        width: '366px',
        minHeight: '188px',
        borderRadius: '16px',
        padding: '20px',
        // border: '1.5px solid #e5e5e5',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
        backgroundColor: 'white',
        textAlign: 'left',
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
      }}
    >
      <div style={{ fontSize: '14px', fontWeight:'600'}}>{text}</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={image} alt={name} draggable='false' style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize:'13px', fontWeight:'700' }}>{name}</span>
          <span style={{ fontSize:'10px', fontWeight:'500', color: '#16A349' }}>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
