"use client";
import React, { use, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Crsitems from '../ui/Crsitems'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

function page() {
   const searchParams = useSearchParams();
    const courseId = searchParams.get('id');
    console.log(courseId)
    const [course,setCourse]=useState({});
   useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3300/api/course/"+courseId, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        console.log(response.status)
        setCourse(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error);
      }
    };

    fetchCourses();
  }, []);
  console.log(course)
  return (
    <div>
<Navbar/>

<Crsitems chapters={course.chapters}/>

<Footer/>
    </div>
  )
}

export default page