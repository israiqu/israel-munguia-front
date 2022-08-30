import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css'
import { MyMenu } from '../atoms/MyMenu';

const Header = () => {

  const [Openmenu, setOpenmenu] = useState(false);

  const open = {
    display: '',
  };
  
  const close = {
    display: 'none',
  };

	return (
    <nav className={styles.nav_wrapper}>
      <div
        className={styles.Logo_wrapper}
        onClick={() => setOpenmenu(!Openmenu)}>
        <Link href='/'>
          <Image
            src='/logotipo.svg'
            alt='Logotipo de Beira Consultores'
            width='180'
            height='180'
          />
        </Link>
        {Openmenu ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='hidden w-6 h-6 last'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 first'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h8m-8 6h16'></path>
          </svg>
        )}
        <MyMenu />
      </div>
      <div className={styles.List_wrapper} style={Openmenu ? open : close}>
        <ul className={styles.List_menu_wrapper}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={styles.Lang}>
          <h2>Lenguage</h2>
          <h2>Temas</h2>
        </div>
      </div>
    </nav>
  );
}

export default Header