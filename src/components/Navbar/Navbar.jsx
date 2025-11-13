import React, { useState } from 'react';
import searchIcon from '../../assets/img/SearchIcon.svg';
import locationIcon from '../../assets/img/MapIcon.svg';
import logoIcon from '../../assets/img/Logo.svg';
import userIcon from '../../assets/img/userProfile.svg';
import dropIcon from '../../assets/img/dropIcon.svg';
import savedIcon from '../../assets/img/savedIcon.svg';
import settingIcon from '../../assets/img/settingIcon.svg';
import logoutIcon from '../../assets/img/logoutIcon.svg';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '25px 6%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src={logoIcon} alt="Logo" style={{ height: '40px', width: 'auto' }} />
      </a>

      {/* Menu */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        {['Beranda', 'Seliweran Yuk', 'Lihat di Peta', 'Chat'].map((item, i) => (
          <a
            key={i}
            href="/"
            style={{
              position: 'relative',
              fontSize: '14px',
              color: 'black',
              fontWeight: '500',
              marginLeft: i === 0 ? '0px' : '30px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.borderBottom = '2px solid #FECB08')}
            onMouseLeave={(e) => (e.target.style.borderBottom = 'none')}
          >
            {item}
          </a>
        ))}

        {/* Kanan */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginLeft: '70px',
            position: 'relative',
          }}
        >
          {/* Search icon */}
          <img
            src={searchIcon}
            alt="Search"
            style={{
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              opacity: '0.9',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '1')}
            onMouseLeave={(e) => (e.target.style.opacity = '0.9')}
          />

          {/* Search box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px solid #FECB08',
              borderRadius: '18px',
              padding: '4px 8px',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={locationIcon}
              alt="Location"
              style={{
                width: '18px',
                height: '20px',
                marginRight: '6px',
                opacity: '0.8',
              }}
            />
            <input
              type="text"
              placeholder="Masukkan Lokasi Kamu"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                width: '160px',
                background: 'transparent',
              }}
            />
          </div>

          {/* Login / User section */}
          {!isLoggedIn ? (
            <button
              style={{
                backgroundColor: '#FECB08',
                color: 'white',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '18px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e6b800';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FECB08';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => setIsLoggedIn(true)}
            >
              Masuk
            </button>
          ) : (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {/* Foto + Nama */}
              <img
                src={userIcon}
                alt="User"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Hi, Ayu Larasati</span>

              {/* Icon dropdown */}
              <img
                src={dropIcon}
                alt="Dropdown"
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer',
                  transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
                onClick={() => setShowDropdown(!showDropdown)}
              />

              {/* Dropdown menu */}
              {showDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '45px',
                    right: 0,
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    padding: '10px',
                    width: '150px',
                  }}
                >
                  {[
                    { label: 'Tersimpan', icon: savedIcon },
                    { label: 'Pengaturan', icon: settingIcon },
                    { label: 'Keluar', icon: logoutIcon },
                    ].map((menu, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (menu.label === 'Keluar') handleLogout();
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = '#FECB0833')}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                    >
                      <img
                        src={menu.icon}
                        alt={menu.label}
                        style={{ width: '18px', height: '18px', opacity: '0.8' }}
                      />
                      {menu.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
