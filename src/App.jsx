import React from 'react';
import styles from './style';
import {Navbar, Home, Stats, Sambutan} from './components';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`${styles.flexStart} bg-gradient-to-r from-indigo-500 from-1% via-sky-500 via-5% to-emerald-400 to-90%`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Sambutan />
        </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </div>


  );
};

export default App;