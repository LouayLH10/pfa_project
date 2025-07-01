"use client"
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'
import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react'

function AddChap() {
  const searchParams = useSearchParams();
  const nbchap = searchParams.get('nbchapter');
  const nbchapter = Number(nbchap);
  const refs = useRef({});
  const router = useRouter();
const path = usePathname();
const [error, setError] = React.useState("");
const course = JSON.parse(localStorage?.getItem("course"));
const chapters = course?.chapters || [];
 // 1. Initialiser les refs
useEffect(() => {
  for (let i = 0; i < nbchapter; i++) {
    refs.current[`chapter${i + 1}`] = refs.current[`chapter${i + 1}`] || React.createRef();
    refs.current[`chapter${i + 1}desc`] = refs.current[`chapter${i + 1}desc`] || React.createRef();
    refs.current[`chapter${i + 1}pdf`] = refs.current[`chapter${i + 1}pdf`] || React.createRef();
    refs.current[`chapter${i + 1}video`] = refs.current[`chapter${i + 1}video`] || React.createRef();
  }
}, [nbchapter]);

// 2. Remplir les champs après le rendu
useEffect(() => {
  const course = JSON.parse(localStorage?.getItem("course"));
  const chapters = course?.chapters || [];

  if (!Array.isArray(chapters) || chapters.length === 0 || !refs.current) return;

  // Petit délai pour laisser React finir le rendu des inputs
  const timeout = setTimeout(() => {
    for (let i = 0; i < nbchapter; i++) {
      const chapter = chapters[i] || {};

      const nameRef = refs.current[`chapter${i + 1}`]?.current;
      const descRef = refs.current[`chapter${i + 1}desc`]?.current;

      if (nameRef) nameRef.value = chapter.chapterName || "";
      if (descRef) descRef.value = chapter.chapterDesc || "";

    }
  }, 0); // Exécution après le rendu

  return () => clearTimeout(timeout);
}, [nbchapter]);



  const handleClick = (e) => {
    const btnId = e.currentTarget.dataset.id;
          const course = JSON.parse(localStorage?.getItem("course"));

 for (let i = 0; i < nbchapter; i++) 
{      const chapterName = refs.current[`chapter${i+1}`].current?refs.current[`chapter${i+1}`].current.value:"";
      const chapterDesc = refs.current[`chapter${i+1}desc`].current?refs.current[`chapter${i+1}desc`].current.value:"";
      const coursesupport = refs.current[`chapter${i+1}pdf`].current?refs.current[`chapter${i+1}pdf`].current.value:"";
    
var chapter;
      if(!chapters[i]){
        chapter = {chapter:i+1, chapterName, chapterDesc, coursesupport,quiz:{} };}
      else{
         chapter= {chapter:i+1, chapterName:chapterName, chapterDesc:chapterName, coursesupport, quiz:chapters[i].quiz }
      }
      if (!course) {
        alert("Course not found");
        return;
      }
      if (!course.chapters) {
        course.chapters = [];
      }
     
      course.chapters[i] = chapter;
      console.log(course.chapters[i])
     }
     console.log(course)
      localStorage.setItem("course", JSON.stringify(course));
    router.push(`${path}/quiz?chapter=${btnId}&nbchapter=${nbchapter}`);
  
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const updatedChapters = [];

  for (let i = 0; i < nbchapter; i++) {
    const chapterName = refs.current[`chapter${i + 1}`]?.current?.value || "";
    const chapterDesc = refs.current[`chapter${i + 1}desc`]?.current?.value || "";
    const coursesupport = refs.current[`chapter${i + 1}pdf`]?.current?.value || "";
    const quiz = chapters[i]?.quiz || {};

    if (!chapterName || !chapterDesc || !coursesupport || Object.keys(quiz).length === 0) {
      setError("Please fill all the fields");
      return;
    }

    updatedChapters.push({
      chapter: i + 1,
      chapterName,
      chapterDesc,
      coursesupport,
      quiz
    });
  }

  // 1. Récupérer les données sauvegardées
  const savedCourse = JSON.parse(localStorage.getItem("course"));
  const fullCourse = { ...savedCourse, chapters: updatedChapters };

  try {
  const formData = new FormData();

  // 1. Ajouter l'objet course sous forme de string JSON
  formData.append("course", JSON.stringify(fullCourse));

  // 2. Ajouter l'image si base64
  if (fullCourse.courseimg?.startsWith("data:image")) {
    const response = await fetch(fullCourse.courseimg);
    const blob = await response.blob();
    const file = new File([blob], "courseimg.png", { type: blob.type });
    formData.append("courseimg", file);
  }

  // 3. Debug : afficher le contenu réel du formData
  for (let pair of formData.entries()) {
    console.log(pair[0] + ':', pair[1]);
  }

  // 4. Envoyer avec axios
  const response = await axios.post(
    "http://localhost:3300/api/course/create_course",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  if (response.status === 201) {
    alert("Course created successfully");
    router.push("/teacher_dashboard/ajoutcours");
  } else {
    alert(response.data?.message || "Error creating course");
  }

} catch (error) {
  console.error("Erreur lors de l'envoi :", error);
  alert(error.response?.data?.message || "Erreur côté client");
}

};

  return (
    <div>
      <Navbar />
      <Form typ="ADDCHAP" nbchap={nbchapter} error={error} handle={handleSubmit} handlechap={handleClick} refs={refs.current} />
      <Footer />
    </div>
  );
}

export default AddChap;
