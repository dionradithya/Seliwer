import React from 'react'
import Card from '../../components/Cards/MascotCard'
import Img1 from '../../assets/img/Card1.svg'
import Img2 from '../../assets/img/Card2.svg'
import Img3 from '../../assets/img/Card3.svg'
import Img4 from '../../assets/img/Card4.svg'

const CardSection = () => {
  return (
    <div style={{height: 'calc(100vh - 70px)', padding:'100px', textAlign:'center'}}>

        {/* Card Section Text */}
        <div style={{fontSize:'30px', fontWeight:'bold', marginBottom:'50px'}}>Kenapa Harus Seliwer</div>

        {/* Card Groups */}
        <div style={{display: "flex", justifyContent: "center", gap: "55px", flexWrap: "wrap"}}>
            <Card image={Img1} title="Satu Tempat untuk Semua UMKM"/>
            <Card image={Img2} title="Pencarian Cepat & Akurat"/>
            <Card image={Img3} title="Informasi Lengkap & Terpercaya"/>
            <Card image={Img4} title="Dukung UMKM Lokal Berkembang"/>
        </div>

    </div>
  )
}

export default CardSection