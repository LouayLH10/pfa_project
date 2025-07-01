"use client";
import React, { useEffect, useState } from 'react'
import Entetepge from '../ui/Entetepge'
import Card from '../ui/Card'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function page() {
  const [courses, setCourses] = useState([]);
 useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3300/api/course/courses", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error);
      }
    };

    fetchCourses();
  }, []);
console.log(courses)

      
      
   
     

  return (
    <div >
      <Navbar />
     
      <Entetepge page="Courses" path="/Courses" />
      <div className='search-container'>
     <SearchForm/>
        </div>
      <div className='courses-container'>
        {courses.map((course) => (
          
          <Card titcrs={course.coursename}
            desc={course.coursedesc}
            key={course._id}
            id={course._id}
            teacher={course.teacher}
            price={course.price}
            img={"http://localhost:3300/uploads/courses/"+course.courseimg}
            />))}
     </div>
      <Footer/>
    </div>
  )
}

export default page