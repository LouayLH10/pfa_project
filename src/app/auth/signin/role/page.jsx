"use client";

import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'

import React, {  useRef } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
function page() {
    const searchParams = useSearchParams();

   const router = useRouter();
   const token = searchParams.get('token');
   
  const roleRef = useRef(null);
const refs={roleRef}
const handleClick = async (e) => {
  
  e.preventDefault(); 
  const role = roleRef.current ? roleRef.current.value : "";
  if(!token){
  try {
    // Envoi de la requête POST pour vérifier l'existence de l'email avec Axios
    const response = await axios.post("http://localhost:3300/api/auth/saveuser", {
  
      role
    });
  
    // Vérification de la réponse et gestion des données
  
      router.push("/auth/login");
   
    
  } catch (error) {
   alert(error.message);
   
   
  }  }
  else{
        try {
      const response = await axios.post("http://localhost:3300/api/auth/complete", {
        token,
        role
      });

      // Tu peux stocker le token final dans localStorage par exemple
      const finalToken = response.data.token;
      alert(finalToken)
      localStorage.setItem("token", finalToken);

      window.close()

    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'enregistrement du rôle.");
    }
  }

}
  return (
    <div>
        <Navbar/>
        <Form typ="ROLE" refs={refs} handle={handleClick} />
        <Footer/>
    </div>
  )
}

export default page