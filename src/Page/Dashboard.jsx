import React from 'react'
import styles from '../style';
import {Navbar, Home, Footer, Sambutan, Domain, Berita,  Media, Galeri} from '../components';

const Dashboard = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className={`${styles.paddingX} sm:${styles.flexCenter} sticky top-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-gradient-to-r from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[url('./BgSambutan.png')]`}>
        <div className={`${styles.boxWidth}`}>
          <Sambutan />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Domain />
        </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-t from-emerald-400 from-10%`}>
        <div className={`${styles.boxWidth}`}>
          <Berita />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-b from-emerald-400 to-green-200 from-50%`}>
        <div className={`${styles.boxWidth}`}>
          <Galeri  />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-b from-green-200 form-90%`}>
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

export default Dashboard
