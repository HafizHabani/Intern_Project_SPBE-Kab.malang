import React from 'react'
import styles from '../style';
import {Navbar, Homlay, Footer, Media, Islay} from '../components';

const Layanan = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  `}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-gradient-to-r from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`}>
        <div className={`${styles.boxWidth}`}>
          <Homlay />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Islay />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}style={{ backgroundColor: '#55A9355E' }}>
        <div className={`${styles.boxWidth}`}>
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

export default Layanan