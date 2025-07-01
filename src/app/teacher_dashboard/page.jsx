import React from 'react'
import Navbar from '../components/Navbar'
import Entetepge from '../ui/Entetepge'
import Button from '../ui/Button'
import SearchForm from '../components/SearchForm'
import Link from 'next/link'

function page() {
  return (
    <div>
        <Navbar/>
        <Entetepge page="Your Courses" path="/Teacher_Dashboard" />
<div className="gestionnaire">
<div className='search-container'>
<div className='addbtn' >
  <Link href='/teacher_dashboard/ajoutcours'>  <Button type="button" txt="+"  /></Link>
</div>

     <SearchForm/>
        </div>


</div>
    </div>
  )
}

export default page