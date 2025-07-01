import React from 'react'
import Sidebar from "../ui/Sidebar"
import Chart1 from '../ui/Chart1'
import Chart2 from '../ui/Chart2'
import Userslist from '../ui/Userslist'
import Courseslist from '../ui/Coursesliste'

function Page() {
  return (
    <div>
      <Sidebar />
      <div className="p-6 sm:ml-64">
      <h1 className="leading-none text-4xl font-bold text-[#14213d]-900 light:text-white pb-2">Dashboard</h1>
<br/>
        <div className="flex flex-wrap -mx-2"> {/* Utilisation de flexbox pour l'alignement côte à côte */}
          <div className="inline-block w-full sm:w-1/2 p-2"> {/* Responsiveness avec w-full sur petits écrans */}
            <Chart1 />
          </div>

          <div className="inline-block w-full sm:w-1/2 p-2">
            <Chart2 />
          </div>
        </div>
     <br/>
      
      {/* Conteneur pour le composant Userslist */}
      <div className="max-w-full bg-white rounded-lg shadow-sm light:bg-gray-800 p-4 md:p-6">

        <div className="flex justify-between mb-5">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 light:text-white pb-2">Users List</h5>
            <p className="text-base font-normal text-gray-500 light:text-gray-400">50 Users</p>
          </div>
        </div>
        {/* Assurez-vous que le composant Userslist est visible ici */}
        <div className="mt-6">
          <Userslist size={2} />
        </div>
      </div>
      <br/>
      <div className="max-w-full bg-white rounded-lg shadow-sm light:bg-gray-800 p-4 md:p-6">

<div className="flex justify-between mb-5">
  <div>
    <h5 className="leading-none text-3xl font-bold text-gray-900 light:text-white pb-2">Courses List</h5>
    <p className="text-base font-normal text-gray-500 light:text-gray-400">50 Courses</p>
  </div>
</div>
{/* Assurez-vous que le composant Userslist est visible ici */}
<div className="mt-6">
  <Courseslist size={2} />
</div>
</div>
    </div>
    
      
      {/* Conteneur pour le composant Userslist */}
    
   
    </div>
  )
}

export default Page;
