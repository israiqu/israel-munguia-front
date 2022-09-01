import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styles from '../../styles/Hero.module.css'

const Hero = () => {
	return (
    <section className={styles.Hero_wrapper}>
      <div className={styles.Title}>
        <h1>Hello, I'm Israel, Software Dev</h1>
        <p>
          I am passionate about helping leaders who want to{' '}
          <span>STRENGTHEN</span> and <span>STANDARDIZE</span> their company
          processes.
        </p>
        <p>
          I believe in <span>CONTINUOUS IMPROVEMENT</span> and in{' '}
          <span>TECHNOLOGY</span> as tools to increase the competitiveness of
          companies.
        </p>
      </div>
      <div className={styles.Image}>
        <Player
          autoplay
          loop
          speed='1'
          background='transparent'
          src='https://assets10.lottiefiles.com/packages/lf20_dlw10cqe.json'
          style={{ maxHeight: '60rem', maxWidth: '60rem' }}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </div>
    </section>
  );
}

export default Hero