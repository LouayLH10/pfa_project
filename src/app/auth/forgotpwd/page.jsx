import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Form typ="FORGOT"/>
        <Footer/>
    </div>
  )
}

export default page