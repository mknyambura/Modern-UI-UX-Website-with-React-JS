import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatUIUX } from './containers';
import { Brand, CTA, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__background'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatUIUX />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App