import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FirstSection from './home/FirstSection'
import SecondeSection from './home/SecondeSection'
import ThirdSection from './home/ThirdSection'
import FourthSection from './home/FourthSection'
import FifhSection from './home/FifhSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecondeSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifhSection/>
      <Footer/>
    </div>
  )
}
