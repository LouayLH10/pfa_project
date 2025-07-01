"use client";
import React from 'react'
import Categorie from '../ui/Categorie'

function ThirdSection() {
const Icons=["/technical-support.png","/data-science.png","/megaphone.png","/pi-mathematical-constant-symbol.png"]
const cat=["IT-developpement","Data Science","Marketing","Mathematique"]


  return (
    <div className='container3'>
        <p className='topcat'>Top Category</p>
        <h1 className='chcat'>Choose your category for your career</h1>
        <div className='categ-container'>
            {Icons.map((icone,index)=>(
                <Categorie key={index} cat={cat[index]} img={icone}/>
            )
        )}
            
        </div>


    </div>
  )
}

export default ThirdSection