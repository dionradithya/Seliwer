import React from "react";

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#D03068", color: "#fff", padding: "60px 246px", textAlign: "center" }}>
        <div style={{display:"flex", backgroundColor: "green"}}>
            <div style={{ backgroundColor: "#addf0bff" }}>
                <div></div>
                <div style={{textAlign:"start" ,fontSize: "24px", fontWeight: "bold", width:"30%" }}>Tempatnya kamu kenal, jelajahi, dan dukung UMKM sekitar.</div>
                <div></div>
            </div>
            <div style={{ backgroundColor: "#660ef4ff" }}>Kolom 2</div>
            <div style={{ backgroundColor: "#0da31aff" }}>Kolom 3</div>
        </div>
        <div>© 2025 Dion. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

