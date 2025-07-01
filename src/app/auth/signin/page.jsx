'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Form from '@/app/ui/Form';
import React, { useState, useRef } from 'react';
import axios from 'axios';

export let cordonnee = {};

function Signin() {
  const router = useRouter();
  const [error, setError] = useState("");

  // Initializing useRef for all form inputs
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const phoneRef = useRef(null);

  const refs = {
    emailRef,
    usernameRef,
    firstnameRef,
    lastnameRef,
    passwordRef,
    confirmPasswordRef,
    phoneRef
  };

  const handleClick = async (e) => {
    e.preventDefault();  // Empêcher le comportement par défaut d'abord
    
    // Extraction des valeurs des références
    const email = emailRef.current ? emailRef.current.value : "";
    const username = usernameRef.current ? usernameRef.current.value : "";
    const firstname = firstnameRef.current ? firstnameRef.current.value : "";
    const lastname = lastnameRef.current ? lastnameRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    const confirmPassword = confirmPasswordRef.current ? confirmPasswordRef.current.value : "";
    const phone = phoneRef.current ? phoneRef.current.value : "";
 
    // Réinitialiser les erreurs et les styles des bordures
    setError("");
    [passwordRef, confirmPasswordRef, phoneRef, emailRef].forEach(ref => {
      if (ref.current) {
        ref.current.style.borderBottom = "1px solid #e0e0e0"; // Bordure par défaut
      }
    });
  
    // 🔹 **Validation de l'email**
    if (!email) {
      setError("Email is required");
      emailRef.current.style.borderBottom = "1px solid red";
      return;
    }
  
    // 🔹 **Validation du mot de passe**
    if (password.length < 8) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setError("Password must be at least 8 characters long");
      return;
    }
    if (!/[0-9]/.test(password)) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setError("Password must contain at least one digit");
      return;
    }
    if (!/[a-z]/.test(password)) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[!@#$%^&*.]/.test(password)) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setError("Password must contain at least one special character");
      return;
    }
    if (password !== confirmPassword) {
      confirmPasswordRef.current.style.borderBottom = "1px solid red";
      setError("Passwords do not match");
      return;
    }
  
    // 🔹 **Validation du numéro de téléphone**
    if (isNaN(phone) || phone.length !== 8) {
      phoneRef.current.style.borderBottom = "1px solid red";
      setError("Phone number must be 8 digits long and contain only numbers");
      return;
    }
  
    // 🔹 **Vérification de l'email existant**
    try {
  
      // Envoi de la requête POST pour vérifier l'existence de l'email avec Axios
      const response = await axios.post("http://localhost:3300/api/auth/existance", {
        email, username, firstname, lastname, password, phone
      });
    
      // Vérification de la réponse et gestion des données
   
        router.push("/auth/signin/verif");
        
      
    } catch (error) {
      setError("Email already exists");
      emailRef.current.style.borderBottom = "1px solid red";
    }
  };
  
  return (
    <div>
      <Navbar />
      <Form 
        typ="SIN" 
        handle={handleClick} 
        error={error} 
        refs={refs} // Passing refs to the Form component
      />
    </div>
  );
}

export default Signin;
