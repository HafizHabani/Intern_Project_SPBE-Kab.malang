import React from 'react'
import styles from '../style';
import {Navbar, Homlay, Footer, Media, Islay, FormBerita} from '../components';


const ArtikelBerita = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  `}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-gradient-to-r from-rose-900 from-5% via-red-700 via-2% to-red-500 to-90%`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <FormBerita />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-5`}style={{ backgroundColor: '#DF4141' }}>
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

export default ArtikelBerita
