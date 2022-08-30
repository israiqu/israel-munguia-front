import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styles from '../../styles/Hero.module.css'
import Mybtndwload from '../atoms/Mybtndwload';

const Hero = () => {
	return (
    <section className={styles.Hero_wrapper}>
      <div className={styles.Title}>
        <h1>Hello, I'm Israel, Software Dev</h1>
        <p>
          I am passionate about helping leaders who want to{' '}
          <span>strengthen</span> and <span>standardize</span> their company
          processes.
        </p>
        <p>
          I believe in <span>continuous improvement</span> and in{' '}
          <span>technology</span> as tools to increase the competitiveness of
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