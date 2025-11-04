import React from "react";

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#D03068", color: "#fff", padding: "60px 246px", textAlign: "center" }}>

        {/* MAIN GROUP */}
        <div style={{display:"flex", justifyContent: "space-between"}}>

            {/* KOLOM 1 */}
            <div style={{display: "flex", flexDirection: "column", textAlign:"start", width:"40%" }}>
                <div style={{fontSize: "24px", backgroundColor:"#dd799cff"}}>LOGO</div>
                <div style={{fontSize: "24px", marginTop: "15px", fontWeight: "bold"}}>Tempatnya kamu kenal, jelajahi, dan dukung UMKM sekitar.</div>
                <div style={{fontSize: "16px", marginTop: "15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur</div>
            </div>

            {/* KOLOM 2 */}
            <div style={{display: "flex", flexDirection: "column", width:"30%", textAlign:"start", height:"100%"}}>
                <div style={{fontSize:"20px"}}>Jelajahi Seliwer</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Tentang Kami</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Hubungi Kami</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Kebijakan Privasi</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Syarat & Ketentuan</div>
            </div>

            {/* KOLOM 3 */}
            <div style={{display: "flex", flexDirection: "column", width:"20%", textAlign:"start", height:"100%"}}>
                <div style={{fontSize:"20px"}}>Ikuti Kami</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Instagram</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Facebook</div>
                <div style={{fontSize:"15px", padding:"8px 0px"}}>Youtube</div>
            </div>
        </div>
        <div style={{marginTop: "20px"}}>© 2025 Dion. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

