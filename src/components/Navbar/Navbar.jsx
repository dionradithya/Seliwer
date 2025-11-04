import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Logo</a>

        <nav className="navbar">
            <a href="/">Beranda</a>
            <a href="/">Seliweran Yuk</a>
            <a href="/">Lihat di Peta</a>
            <a href="/">Chat</a>

            <div className="navbar-kanan">
                <span className="icon">[Search Icon]</span>
                <input
                    type="text"
                    placeholder="📍Masukkan Lokasi Kamu"
                    className="search-input"
                />
                <span className="icon">[Profile Icon]</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar