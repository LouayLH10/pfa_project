import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FirstSection from './home/FirstSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <Footer/>
    </div>
  )
}
