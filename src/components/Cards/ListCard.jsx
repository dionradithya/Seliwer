import React from 'react';
import starIcon from '../../assets/img/star.svg';
import locationIcon from '../../assets/img/loc.svg';

const ListCard = ({ image, title, category, description, distance, rating, price }) => {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      {/* Gambar */}
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '160px',
          objectFit: 'cover',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      />

      {/* Konten */}
      <div
        style={{
          padding: '8px 12px 12px 12px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '120px',
        }}
      >
        {/* Kategori, Judul, Deskripsi */}
        <div>
          <p
            style={{
              fontSize: 12,
              color: '#13A549',
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            {category}
          </p>
          <h3
            style={{
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                fontSize: 13,
                color: '#666',
                lineHeight: 1.4,
                marginBottom: 10,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* BADGES */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {/* Rating */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '4px 8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              fontSize: 13,
            }}
          >
            <img src={starIcon} alt="rating" style={{ width: 14, height: 14 }} />
            <span>{rating}</span>
          </div>

          {/* Distance */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '4px 8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              fontSize: 13,
            }}
          >
            <img src={locationIcon} alt="distance" style={{ width: 14, height: 14 }} />
            <span>{distance} km</span>
          </div>

          {/* Price */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '4px 8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              fontSize: 13,
            }}
          >
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
