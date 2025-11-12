import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/img/backIcon.svg';
import eyeIcon from '../../assets/img/eyeIcon.svg';
import eyeOffIcon from '../../assets/img/eyeoffIcon.svg';
import googleIcon from '../../assets/img/googleIcon.svg';
import facebookIcon from '../../assets/img/facebookIcon.svg';
import appleIcon from '../../assets/img/appleIcon.svg';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);

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
      {/* Card */}
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          padding: '40px 40px',
          width: '90%',
          maxWidth: '360px',
          position: 'relative',
        }}
      >
        {/* Tombol Kembali */}
        <div
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          <img src={backIcon} alt="Kembali" style={{ width: 20, height: 20 }} />
          <span style={{ fontSize: 14, fontWeight: 500 }}>Kembali</span>
        </div>

        {/* Judul */}
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Register</h2>

        {/* Input Nama */}
        <label style={{ fontSize: 14, fontWeight: 500 }}>Nama</label>
        <input
          type="text"
          placeholder="Masukkan Nama"
          style={{
            width: '100%',
            padding: '10px 14px',
            border: '1.5px solid #ddd',
            borderRadius: '8px',
            marginTop: '6px',
            marginBottom: '16px',
            fontSize: 14,
            boxSizing: 'border-box',
          }}
        />

        {/* Input Email */}
        <label style={{ fontSize: 14, fontWeight: 500 }}>Email</label>
        <input
          type="email"
          placeholder="Masukkan Email"
          style={{
            width: '100%',
            padding: '10px 14px',
            border: '1.5px solid #ddd',
            borderRadius: '8px',
            marginTop: '6px',
            marginBottom: '16px',
            fontSize: 14,
            boxSizing: 'border-box',
          }}
        />

        {/* Input Kata Sandi */}
        <label style={{ fontSize: 14, fontWeight: 500 }}>Kata Sandi</label>
        <div
          style={{
            position: 'relative',
            marginTop: '6px',
            marginBottom: '16px',
          }}
        >
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Masukkan Kata Sandi"
            style={{
              width: '100%',
              padding: '10px 40px 10px 14px',
              border: '1.5px solid #ddd',
              borderRadius: '8px',
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          />
          <img
            src={showPassword ? eyeOffIcon : eyeIcon}
            alt="Toggle Password"
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              opacity: 0.7,
            }}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        {/* Input Konfirmasi Kata Sandi */}
        <label style={{ fontSize: 14, fontWeight: 500 }}>Konfirmasi Kata Sandi</label>
        <div
          style={{
            position: 'relative',
            marginTop: '6px',
            marginBottom: '12px',
          }}
        >
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Masukkan Kata Sandi"
            style={{
              width: '100%',
              padding: '10px 40px 10px 14px',
              border: '1.5px solid #ddd',
              borderRadius: '8px',
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          />
          <img
            src={showConfirm ? eyeOffIcon : eyeIcon}
            alt="Toggle Password"
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              opacity: 0.7,
            }}
            onClick={() => setShowConfirm(!showConfirm)}
          />
        </div>

        {/* Checkbox Persetujuan */}
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 13,
            color: '#555',
            marginBottom: '20px',
          }}
        >
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            style={{ marginRight: '8px' }}
          />
          Saya menyetujui Syarat & Ketentuan yang berlaku
        </label>

        {/* Tombol Daftar */}
        <button
          disabled={!agree}
          style={{
            width: '100%',
            background: agree ? '#FECB08' : '#ccc',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            fontSize: 15,
            fontWeight: 600,
            color: '#fff',
            cursor: agree ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
            boxSizing: 'border-box',
          }}
          onMouseEnter={(e) => agree && (e.target.style.background = '#e6b800')}
          onMouseLeave={(e) => agree && (e.target.style.background = '#FECB08')}
          onClick={() => agree && navigate('/login')}
        >
          Daftar
        </button>

        {/* Separator */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: '#777',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          atau dengan
        </p>

        {/* Sosial Media */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <img src={appleIcon} alt="Apple" style={{ width: 32, height: 32, cursor: 'pointer' }} />
          <img src={googleIcon} alt="Google" style={{ width: 32, height: 32, cursor: 'pointer' }} />
          <img src={facebookIcon} alt="Facebook" style={{ width: 32, height: 32, cursor: 'pointer' }} />
        </div>

        {/* Catatan bawah */}
        <p style={{ textAlign: 'center', fontSize: 12, color: '#777' }}>
          Sudah punya akun?{' '}
          <span
            style={{ color: '#FECB08', fontWeight: 500, cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Login di sini
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
