"use client";
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
function page() {

   const router = useRouter();
    const [error, setError] = useState("");
  const codeRef = useRef(null);
const refs={codeRef}
const handleClick = async (e) => {
  e.preventDefault(); 
  const code = codeRef.current ? codeRef.current.value : "";
  if (code.length!=4) {
setError('Make the 4 numbers code')
codeRef.current.style.borderBottom = "1px solid red";

return;
  }

  try {
    // Envoi de la requête POST pour vérifier l'existence de l'email avec Axios
    const response = await axios.post("http://localhost:3300/api/auth/register", {
      
      code
    });
  
    // Vérification de la réponse et gestion des données
  
      router.push("/auth/signin/role");
   
    
  } catch (error) {
    setError("Wrong code");
    codeRef.current.style.borderBottom = "1px solid red";
  
  }
};

  return (
    <div>
        <Navbar/>
        <Form typ="VERIF" refs={refs} error={error} handle={handleClick} />
       
        <Footer/>
    </div>
  )
}

export default page