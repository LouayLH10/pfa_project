"use client";

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Form from '@/app/ui/Form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '@/app/context/UserContext';

function Login() {
  const router = useRouter();
  const emailLoRef = useRef(null);
  const pwdRef = useRef(null);

  const { refreshUserInfo } = useUser() || {};
  const [error, setError] = useState("");

  const refs = {
    emailLoRef,
    pwdRef
  };
useEffect(() => {
  const handleMessage = (event) => {
    // 🔐 Tu peux vérifier event.origin si besoin
    const token = event.data;
    if (token) {
      console.log("Token reçu :", token);
      localStorage.setItem("token", token); // ou useContext, etc.
      window.location="/"; // ou router.push('/dashboard') si connecté
    }
  };

  window.addEventListener("message", handleMessage);

  return () => {
    window.removeEventListener("message", handleMessage);
  };
}, []);

  const handleclick = async (e) => {
    e.preventDefault();

    const email = emailLoRef.current?.value.trim() || "";
    const pwd = pwdRef.current?.value || "";

    if (!email || !pwd) {
      setError("Put your informations please");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3300/api/auth/login", {
        email,
        pwd
      });

      if (response.status === 200) {
        const { token } = response.data;

        localStorage.setItem("token", token);
console.log(token )
        // Rafraîchir les infos utilisateur dans le contexte
        if (typeof refreshUserInfo === "function") {
          refreshUserInfo();
        }

        console.log("Login successful!");
        router.push("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
   
      setError("User Not Found");
    }
  };
const handleAuth = () => {
  const googleAuthURL = "http://localhost:3300/api/auth/google";

  const width = 500;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const authWindow = window.open(
    googleAuthURL,
    "_blank",
    `width=${width},height=${height},top=${top},left=${left}`
  );

  // Optionnel : surveiller la fermeture de la fenêtre
  const timer = setInterval(() => {
    if (authWindow.closed) {
      clearInterval(timer);
      // 👉 Tu peux ici recharger l'utilisateur, récupérer un token, etc.
      window.location="/" // ou appeler une fonction pour vérifier le login
    }
  }, 1000);
};


  return (
    <div>
      <Navbar />
      <Form typ="LOGIN" refs={refs} error={error} handle={handleclick} auth={handleAuth}/>
      <Footer />
    </div>
  );
}

export default Login;
