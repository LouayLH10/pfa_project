import React from 'react'
import Card from '../ui/Card'

export default function FourthSection() {
  return (
    <div className='container4'>
        <h1>Courses for you </h1>
        <div className='crd-container'>
        <Card titcrs="React JS Courses" desc="Learn the fundamentals of React JS, a popular JavaScript library for UI. This course covers components, state management, hooks, and more to help you create  web applications." />
        <Card titcrs="Node.js Courses" desc="Master the backend with Node.js. This course covers server-side development, working with databases, and building RESTful APIs using Express.js." />
        <Card titcrs="Python Programming" desc="Get started with Python, a versatile and powerful programming language. This course covers basic syntax, data structures, and introduces you to libraries like Pandas and NumPy." />
        </div>

    </div>
  )
}
