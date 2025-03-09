"use client";
import React, { useState } from 'react'
import Entetepge from '../ui/Entetepge'
import Card from '../ui/Card'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function page() {

  return (
    <div >
      <Navbar />
     
      <Entetepge page="Courses" path="/Courses" />
      <div className='search-container'>
     <SearchForm/>
        </div>
      <div className='courses-container'>
        <Card titcrs="React JS Courses" desc="Learn the fundamentals of React JS, a popular JavaScript library for UI. This course covers components, state management, hooks, and more to help you create  web applications." />
        <Card titcrs="Node.js Courses" desc="Master the backend with Node.js. This course covers server-side development, working with databases, and building RESTful APIs using Express.js." />
        <Card titcrs="Python Programming" desc="Get started with Python, a versatile and powerful programming language. This course covers basic syntax, data structures, and introduces you to libraries like Pandas and NumPy." />
        <Card titcrs="Web Development Bootcamp" desc="Become a full-stack web developer. This comprehensive course covers HTML, CSS, JavaScript, and popular frameworks like React and Node.js." />
        <Card titcrs="Data Science with Python" desc="Dive into data science with Python. Learn how to analyze data, create visualizations, and build machine learning models using libraries like Scikit-learn and TensorFlow." />
        <Card titcrs="DevOps Essentials" desc="Learn the essentials of DevOps. This course covers continuous integration, continuous deployment, and tools like Docker, Kubernetes, and Jenkins." />
      </div>
      <Footer/>
    </div>
  )
}

export default page