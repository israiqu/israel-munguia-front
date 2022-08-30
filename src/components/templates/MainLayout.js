import React from 'react';
import Head from 'next/head';
import { Footer } from '../molecules/Footer';
import Header from '../molecules/Header';

export const MainLayout = ({ children, title, content }) => {

  return (
    <React.Fragment>
      <Head>
        <title>{title ? `Israel Munguia | ${title}` : 'Israel Munguia'}</title>
        <meta name='description' content={content ? `${content}` : ''} />
        <link rel='icon' href='/favicon.png' />
      </Head>
      
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
