import React from 'react';
import { useNavigate } from 'react-router-dom';
import authImage from '../../assets/img/authBanner.svg';
import backIcon from '../../assets/img/backIcon.svg';

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#13A549',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Card Utama */}
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          padding: '40px 50px',
          width: '90%',
          maxWidth: '345px',
          position: 'relative',
        }}
      >
        {/* Tombol Kembali di dalam card */}
        <div
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            position: 'absolute',
            top: '20px',
            left: '45px',
          }}
        >
          <img
            src={backIcon}
            alt="Kembali"
            style={{
              width: '20px',
              height: '20px',
              opacity: '0.8',
            }}
          />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Kembali</span>
        </div>

        {/* Gambar utama - tetap center */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '40px',
          }}
        >
          <img
            src={authImage}
            alt="Ilustrasi Autentikasi"
            style={{
              width: '300px',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* Bagian teks & tombol - left align */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>
            Selamat Datang di Seliwer!
          </h2>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '32px' }}>
            Silakan pilih untuk melanjutkan ke halaman login atau daftar akun baru.
          </p>

          {/* Tombol Aksi */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
            }}
          >
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: '12px 16px',
                background: '#FECB08',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '15px',
                color: '#fff',
                cursor: 'pointer',
                boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#e6b800')}
              onMouseLeave={(e) => (e.target.style.background = '#FECB08')}
            >
              Masuk
            </button>
            <button
              onClick={() => navigate('/register')}
              style={{
                padding: '12px 16px',
                background: '#FFF',
                border: '2px solid #FECB08',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '15px',
                color: '#FECB08',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#FFF3C4';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#FFF';
              }}
            >
              Saya Pengguna Baru, Daftar!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
