import React from 'react'
import styles from '../style';
import {Navbar, Home, Footer, Sambutan, Domain, Berita,  Media, Galeri, Imple, Islay} from '../components';

const Dashboard = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  `}>
          <Navbar />
        </div>
      </div>

      <div id='Dashboard' className={`${styles.flexStart} bg-gradient-to-r from-rose-900 from-5% via-red-700 via-2% to-red-500 to-90%`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[url('./BgSambutan.png')]`}>
        <div className={`${styles.boxWidth}`}>
          <Sambutan />
        </div>
      </div>

      <div id='Domain' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Domain />
        </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[url('./bgimplementasi.png')] bg-cover bg-no-repeat bg-center`}>
        <div className={`${styles.boxWidth}`}>
          <Imple />
        </div>
      </div>

      <div id='Domain' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Islay />
        </div>
      </div>
      
      <div id='Berita' className={`${styles.paddingX} ${styles.flexCenter} `}style={{ backgroundColor: '#F1F1F1' }}>
        <div className={`${styles.boxWidth}`}>
          <Berita />
        </div>
      </div>

      <div id='Galeri' className={`${styles.paddingX} ${styles.flexCenter} bg-cover bg-no-repeat bg-center bg-[url('./Bggaleri.png')]`} >
        <div className={`${styles.boxWidth}`}>
          <Galeri  />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}style={{ backgroundColor: '#DF4141' }}>
        <div className={`${styles.boxWidth} text-white`}>
          <Media />
        </div>
      </div>
      

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
