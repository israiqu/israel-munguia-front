import React from 'react';
import Link from 'next/link';
import styles from '../../styles/MyMenu.module.css';

export const MyMenu = () => {
  return (
    <ul className={styles.menu_wrapper}>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='#about'>
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
  );
};
