import React from 'react'
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* Konten utama */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Home</h1>
        <p>Ini konten utama halaman.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home