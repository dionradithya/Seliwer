import React, { useState } from 'react';
import ListCard from '../../../components/Cards/ListCard';
import sampleImg from '../../../assets/img/Gambar UMKM/UMKM1.svg';

const ListSection = () => {
  const dummyData = [
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Bakmi Kelinci Lebak Bulus',
      category: 'Restoran Pilihan',
      description: 'Bakmi homemade legendaris dengan topping ayam cincang dan pangsit goreng renyah.',
      distance: 0.8,
      rating: 4.6,
      price: '$$',
    },
    {
      image: sampleImg,
      title: 'Oriana Flowers',
      category: 'Hadiah Pilihan',
      description: 'Toko bunga dengan koleksi segar dan desain buket elegan untuk berbagai acara.',
      distance: 1.5,
      rating: 5.0,
      price: '$$$',
    },
    {
      image: sampleImg,
      title: 'Nasi Uduk Mpo Nunung',
      category: 'Restoran Pilihan',
      description: 'Nasi uduk khas Betawi dengan lauk pauk lengkap dan sambal kacang gurih.',
      distance: 1.2,
      rating: 4.7,
      price: '$$$',
    },

  ];

  // === Pagination Logic ===
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dummyData.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* === Grid List === */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          justifyItems: 'center',
        }}
      >
        {currentItems.map((item, index) => (
          <ListCard key={index} {...item} />
        ))}
      </div>

      {/* === Pagination Buttons === */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            border: '1.5px solid #ccc',
            borderRadius: '6px',
            padding: '6px 12px',
            background: '#fff',
            margin: '0 4px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              border: '1.5px solid #ccc',
              borderRadius: '6px',
              padding: '6px 12px',
              background: currentPage === i + 1 ? '#FECB08' : '#fff',
              color: currentPage === i + 1 ? '#fff' : '#000',
              margin: '0 4px',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            border: '1.5px solid #ccc',
            borderRadius: '6px',
            padding: '6px 12px',
            background: '#fff',
            margin: '0 4px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ListSection;
