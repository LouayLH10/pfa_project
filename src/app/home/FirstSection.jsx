"use client";
import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import {motion, AnimatePresence } from 'framer-motion';

function FirstSection() {
    const images=['/backhome1.jpg ','/backhome2.jpg','/backhome3.jpg','/backhome.jpg']
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(interval);
    },[]);
  return (
    <div className='container1'>
        <AnimatePresence mode='wait'>
        <motion.div
          key={images[index]} 
          className="absolute inset-0 bg-cover bg-center transition-opacity"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }} 
        />

        </AnimatePresence>
        <div className='slogan'>
            <h1 className='firstline'>Learn today !</h1>
            <h1 className='secondeline'>Succeed tomorrow.</h1>
        </div>
        <br/>
        <div className='strtbtn'>
<Button type='button' txt='Start Now'/>
</div>
    </div>
  )
}

export default FirstSection