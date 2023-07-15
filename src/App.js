import React from 'react'

import { Cta,Brand, Navbar } from './components'
import { Header,  WhatGPT3, Blog, Footer, Possibility, Features  } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App