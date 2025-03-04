import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'
import React from 'react'

function Login() {
  return (
    <div>
      <Navbar/>
        <Form typ="LOGIN"/>
        <Footer/>
    </div>
  )
}

export default Login