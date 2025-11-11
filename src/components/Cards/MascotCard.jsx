import React, { useState } from 'react';

const Card = ({ image, title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: '#16A349',
        width: '264px',
        height: '342px',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        color: 'white',
        textAlign: 'center',
        transition: 'transform 0.3s ease',           // smooth animation
        transform: hover ? 'scale(1.2)' : 'scale(1)', // zoom effect
        cursor: 'pointer'
      }}
    >
      <img src={image} alt={title} draggable='false' style={{ width: '215px' }} />
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</div>
    </div>
  );
};

export default Card;
