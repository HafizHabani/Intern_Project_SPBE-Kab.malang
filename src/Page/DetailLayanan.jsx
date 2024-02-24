import React from 'react'
import styles from '../style'
import { Navbar, Media, Footer,Artikel } from '../components'

const DetailLayanan = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} sm:${styles.flexCenter} shadow-xl`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} sm:${styles.flexCenter} bg-neutral`}>
        <div className={`${styles.boxWidth} border-t-slate-300 border-2 `}>
          <Artikel />
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

export default DetailLayanan
