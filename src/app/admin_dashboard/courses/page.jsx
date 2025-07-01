import Courseslist from '@/app/ui/Coursesliste'
import Sidebar from '@/app/ui/Sidebar'
import React from 'react'

function page() {
  return (
    <div>
    <Sidebar/>
    <div className="p-6 sm:ml-64">
    <h1 className="leading-none text-4xl font-bold text-[#14213d]-900 light:text-white pb-2">Courses</h1>
    <br/>
    
<Courseslist/>
</div>

</div>
  )
}

export default page