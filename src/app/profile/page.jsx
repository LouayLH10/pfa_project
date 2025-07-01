"use client";
import React, { useEffect, useState,useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { useUser } from "../context/UserContext";
import axios from "axios"; // Importer axios si tu veux envoyer le fichier
function Page() {
  const {userInfo,refreshUserInfo} = useUser() || {};

  const [profilePic, setProfilePic] = useState(userInfo?.photo||"photo.jpg"); // Chemin par défaut de l'image de profil
const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // Pour stocker le fichier sélectionné
  const [customFileName, setCustomFileName] = useState(""); // Pour le nom personnalisé du fichier
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const pwdRef = useRef(null);
  const cpwdRef = useRef(null);
  const bioRef = useRef(null);
  const refs = {
    usernameRef,
    firstnameRef,
    lastnameRef,
    pwdRef,
    cpwdRef,
    bioRef
  };
 const handleupdate = async(e)=>{
  e.preventDefault(); 

  const username = usernameRef.current ? usernameRef.current.value : "";
  const firstname = firstnameRef.current ? firstnameRef.current.value : "";
  const lastname = lastnameRef.current ? lastnameRef.current.value : "";
  const pwd = pwdRef.current ? pwdRef.current.value : "";
  const confirmpwd = cpwdRef.current ? cpwdRef.current.value : "";
  const bio = bioRef.current ? bioRef.current.value : "";

  // Réinitialiser les erreurs et les styles des bordures
  setError("");
  [pwdRef, cpwdRef, bioRef].forEach(ref => {
    if (ref.current) {
      ref.current.style.borderBottom = "1px solid #e0e0e0"; // Bordure par défaut
    }
  });



if(pwd){
  if (pwd.length < 8) {
    pwdRef.current.style.borderBottom = "1px solid red";
    setError("pwd must be at least 8 characters long");
    return;
  }
  if (!/[0-9]/.test(pwd)) {
    pwdRef.current.style.borderBottom = "1px solid red";
    setError("pwd must contain at least one digit");
    return;
  }
  if (!/[a-z]/.test(pwd)) {
    pwdRef.current.style.borderBottom = "1px solid red";
    setError("pwd must contain at least one lowercase letter");
    return;
  }
  if (!/[A-Z]/.test(pwd)) {
    pwdRef.current.style.borderBottom = "1px solid red";
    setError("pwd must contain at least one uppercase letter");
    return;
  }
  if (!/[!@#$%^&*.]/.test(pwd)) {
    pwdRef.current.style.borderBottom = "1px solid red";
    setError("pwd must contain at least one special character");
    return;
  }
  if (pwd !== confirmpwd) {
    cpwdRef.current.style.borderBottom = "1px solid red";
    setError("pwds do not match");
    return;
  }

}
const email=userInfo.email
  try {

    // Envoi de la requête POST pour vérifier l'existence de l'email avec Axios
    const response = await axios.post("http://localhost:3300/api/auth/update", {
   email, username, firstname, lastname, pwd, bio
    });
  refreshUserInfo()
 
    
  } catch (error) {
    setError(error);
    console.error(error)
  }
 }
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); 
      setSelectedFile(file); 

      // Générer un nom personnalisé pour le fichier
      const newFileName = `profile_${userInfo.userId}${file.name.slice(file.name.lastIndexOf("."))}`; // Utilise l'extension du fichier original
      setCustomFileName(newFileName); 

      // Créer un nouveau fichier avec le nom personnalisé
      const renamedFile = new File([file], newFileName, { type: file.type });

      // Préparer FormData pour l'upload
      const formData = new FormData();
      formData.append("file", renamedFile);
      formData.append("filename", renamedFile.name);
      try {
       
        // Assurer que l'URL est complète (avec le bon protocole http://)
        const response = await axios.post("http://localhost:3300/api/auth/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
    
         
     
        console.log(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
        alert(error);
      }
    }
  };

  const handleButtonClick = () => {
    // Simulation du clic sur l'élément input de type file
    document.getElementById("profile_pic_input").click();
  };

  return (
    <div>
      <Navbar />
      <div className="Photo_profile">
      <div className="Photoprofile">
  {profilePic ? (
    <img src={profilePic} alt="profile" />
  ) : (
    <img src={userInfo?.photo||"photo.jpg"} alt="profile" />
  )}
</div>

      </div>
      <div className="btnprofile">
        <div className="pb" onClick={handleButtonClick}>
          <Button txt="Change Photo" />
        </div>
      </div>
      <Form typ="PROFIL" refs={refs} handle={handleupdate}  error={error ? error.message : null}/>
      <input
        id="profile_pic_input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }} // Cache l'input file
      />
      <Footer />
    </div>
  );
}

export default Page;
