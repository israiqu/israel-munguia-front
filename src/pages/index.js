import React from 'react';
import Hero from '../components/molecules/Hero';
import About from '../components/molecules/About';
import { MainLayout } from '../components/templates/MainLayout';


export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        title='Software Developer'
        content={
          'Software development with 2 years of experience, HTML5, CSS3, Javascript, React, Next.js, Node.js, WordPress.'
        }>
        
        <Hero />
        <About />
        </MainLayout>
    </React.Fragment>
  );
}
