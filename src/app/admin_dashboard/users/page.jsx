import Sidebar from '@/app/ui/Sidebar'
import Userslist from '@/app/ui/Userslist'
import React from 'react'

function page() {
  return (
    <div>
        <Sidebar/>
        <div className="p-6 sm:ml-64">
        <h1 className="leading-none text-4xl font-bold text-[#14213d]-900 light:text-white pb-2">Users</h1>
        <br/>
        
<Userslist/>
</div>

    </div>
  )
}

export default page