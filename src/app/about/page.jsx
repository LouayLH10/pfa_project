"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Entetepge from '../ui/Entetepge'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer';

function page() {
  return (
    <div>
        <Navbar/>
        <Entetepge page="About" path="/About"/>
        <div className='aboutsec'>
            <p className='abus'>About us</p>
            <h1 className='titabout'>Educating and empowering the community</h1>
<div className='cnt1'>
<div className='para'>
<h2>About Our E-Learning Platform</h2>
<br/>
<h3>🚀 Empowering Learning Anytime, Anywhere</h3>
<p>
Our e-learning platform is designed to provide a seamless and engaging learning experience for students, professionals, and lifelong learners. With a diverse range of courses, expert instructors, and interactive content, we make education accessible to everyone, anywhere in the world.
</p>
<h3>🎓 High-Quality Courses</h3>
<p>We offer well-structured courses across various fields, ensuring that learners gain valuable skills and knowledge. Whether you're looking to upskill, explore new topics, or advance your career, our platform has something for you.</p>
<h3>📚 Interactive & Engaging Learning</h3>
<p>Our platform integrates videos, quizzes, assignments, and live sessions to enhance the learning process. We believe that learning should be interactive, practical, and enjoyable.</p>
<h3>🌍 Learn at Your Own Pace</h3>
<p>Flexibility is key! Our courses allow you to learn at your own speed, fitting seamlessly into your schedule. You can access lessons anytime, from any device.</p>
<h3>🔗 Join Our Learning Community</h3>
<p>Be part of a growing community of learners and educators. Share insights, participate in discussions, and network with like-minded individuals to enhance your learning experience.</p>
</div>
<div className='imge'>
<img src='/about.jpg'/>
<img src='/about1.jpg'/>
</div>
</div>
        </div>
        <Footer/>
        </div>
  )
}

export default page