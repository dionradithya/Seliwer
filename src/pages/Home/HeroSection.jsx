import React from 'react'
import kue1 from '../../assets/img/kue1.svg';
import kue2 from '../../assets/img/kue2.svg';
import gelas from '../../assets/img/gelas.svg';
import ayam from '../../assets/img/ayamlaos.svg';
import pisang from '../../assets/img/pisangijo.svg';
import sate from '../../assets/img/sate.svg';
import search from '../../assets/img/search-logo.svg'

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "#13A549" ,position:'relative', display: "flex", flexDirection: "column", height: 'calc(100vh - 70px)', padding:'35px' }}>

        <img src={kue1} alt='kue1' style={{ width: '30%', position: 'absolute', top: "12%", left: "2%" }}/>
        <img src={kue2} alt='kue2' style={{ width: '22%', position: 'absolute', top:'8%', right:'22%' }}/>
        <img src={gelas} alt='gelas' style={{ width: '18%', position: 'absolute', top:'37%', left:'0%' }}/>
        <img src={ayam} alt='ayam laos' style={{ width: '30%', position: 'absolute', top:'30%',  right:'5%' }}/>
        <img src={pisang} alt='pisang ijo' style={{ width: '23%', position: 'absolute', bottom:'-5%', left:'8%' }}/>
        <img src={sate} alt='sate' style={{ width: '35%', position: 'absolute', bottom:'-8%', right:'13%' }}/>

        {/* Hero Section Text */}
        <div style={{width: "60%", margin: "auto"}}>
            <div style={{fontSize:'60px', textAlign:'center', color:'white'}}>Temukan dan Mulai<br/> Jelajahi UMKM di Sekitarmu</div>
            <div style={{fontSize:'20px', textAlign:'center', color:'white', padding:'0 150px', margin:'25px 0'}}>Temukan beragam  produk unggulan, jasa kreatif, dan kuliner otentik dari pelaku usaha lokal di kotamu.</div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div style={{position:'relative', width:'35%'}}>
                <img src={search} alt='search' style={{position:'absolute', left: '18px', top: '50%', transform:'translateY(-50%)', width: '20px', opacity: 0.6, pointerEvents: 'none', zIndex:1}}></img>
                <input type='text' placeholder='Jelajahi Daftar UMKM Sekarang' style={{width:'100%', height:'52px',fontSize:'16px', paddingLeft:'50px', outline:'none', border:'none', borderRadius:'100px', color:'gray', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'}}></input>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection