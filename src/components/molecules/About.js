import Image from 'next/image';
import React from 'react'
import styles from '../../styles/About.module.css'

const about = () => {
	return (
    <div id='about' className={styles.wrapper}>
      <div className={styles.Image}></div>
      <h2>About Me</h2>
      <div className={styles.container}></div>
    </div>
  );
}

export default about