import React from 'react'
import TestimonialCard from '../../components/Cards/TestimonialCard';
import Profile from '../../assets/img/DefaultUser.svg'

const TestimonialSection = () => {
  return (
    <div style={{ height: 'calc(100vh - 70px)', padding:'100px', textAlign:'center' }}>
        
        {/* Testimonial Section Text */}
        <div style={{ fontSize:'30px', fontWeight:'700', marginBottom:'50px' }}>Apa Kata Mereka Tentang Seliwer?</div>

        {/* Testimonial Cards Group */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}
      >
        <TestimonialCard
          text='Saya tidak terlalu paham digital marketing, tapi Seliwer bantu banget. Cukup isi profil usaha, foto, dan alamat, langsung muncul di peta UMKM daerah saya. Gratis pula!'
          name='Rizky Pratama'
          role='Penjual'
          image={Profile}
        />

        <TestimonialCard
          text='Saya suka jelajah di Seliwer buat cari tempat makan dan usaha kecil. Jadi tahu kalau di sekitar kampus banyak banget UMKM yang belum viral.'
          name='Ajeng Kartika'
          role='Pengguna'
          image={Profile}
        />

        <TestimonialCard
          text='Setelah usaha saya muncul di Seliwer, banyak orang sekitar yang baru tahu kalau saya jualan. Sekarang pelanggan sering bilang mereka nemu warung saya lewat Seliwer. Senang banget!'
          name='Sujarwo'
          role='Penjual'
          image={Profile}
        />
      </div>

      <div style={{ display:'flex', backgroundColor:'#FECB08', alignItems:'center', justifyContent:'space-between', color:'white', margin:'80px 150px', padding:'40px 40px', borderRadius:'24px', textAlign:'left'}}>
        <span style={{fontSize:'24px', fontWeight:'700'}}>Yuk, daftarkan UMKM kamu dan tampil di Seliwer hari ini!</span>
        <div style={{border:'2px solid white', fontSize:'16px', fontWeight:'500', borderRadius:'50px', padding:'10px'}}>Daftar Sekarang</div>
      </div>
    </div>
  )
}

export default TestimonialSection