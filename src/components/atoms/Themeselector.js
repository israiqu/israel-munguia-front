import React, { useState, useEffect } from 'react';
import styles from '../../styles/Themeselector.module.css';

const Themeselector = () => {
	
	const [Darkmode, setDarkmode] = useState(true)

	// useEffect(() => {
  //   const light = {
  //     colorScheme: 'light',
  //   };

  //   const dark = {
  //     colorScheme: 'dark',
	// 	};
		
  //   return function SetTheme() {
  //     return Darkmode ? light : dark
  //   };
  // }, []);

  return (
    <>
      <label className={styles.switch}>
        <input
          type='checkbox'
          onClick={() => setDarkmode(!Darkmode)}
        />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};

export default Themeselector;
