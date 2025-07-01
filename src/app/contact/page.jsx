import React from 'react'
import Navbar from '../components/Navbar'
import Entetepge from '../ui/Entetepge'
import Form from '../ui/Form'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
<Navbar />
<Entetepge page="Contact Us" path="/Contact" />
<div className='contact-container'>

<div className='contact-form'>
    <Form typ="CONTACT" />
</div>
    </div>
    <Footer/>
</div>
  )
}

export default page