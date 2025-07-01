"use client";
import React, { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Form from '../../ui/Form';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';

// Fonction pour convertir un fichier en Base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // Base64 string
    reader.onerror = (error) => reject(error);
  });
};

function Page() {
  const coursenameRef = useRef(null);
  const coursenbchapRef = useRef(null);
  const courseimgRef = useRef(null);
  const coursedescRef = useRef(null);
  const priceRef = useRef(null);
  const categoryRef = useRef(null);

  const [nbchapter, setNbchapter] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const { userInfo } = useUser() || {};

  const refs = {
    coursenameRef,
    coursenbchapRef,
    courseimgRef,
    coursedescRef,
    priceRef,
    categoryRef
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const coursename = coursenameRef.current?.value.trim() || "";
    const coursenbchap = coursenbchapRef.current?.value.trim() || "";
    const coursedesc = coursedescRef.current?.value.trim() || "";
    const price = priceRef.current?.value.trim() || "";
    const category = categoryRef.current?.value || "0";
    const file = courseimgRef.current?.files?.[0]; // image sélectionnée

    if (!coursename || !coursenbchap || !coursedesc || !price || category === "0" || !file) {
      setError("Put your informations please");
      return;
    }

    try {
      const base64Image = await fileToBase64(file); // convert to base64

      const course = {
        coursename,
        coursenbchap,
        courseimg: base64Image,
        coursedesc,
        price,
        chapters: [],
        category,
        teacher: userInfo?.userId,
      };

      localStorage.setItem("course", JSON.stringify(course));
      setNbchapter(Number(coursenbchap));
      router.push(`/teacher_dashboard/ajoutcours/addchap?nbchapter=${Number(coursenbchap)}`);
    } catch (err) {
      console.error("Image conversion error:", err);
      setError("Failed to read image file");
    }
  };

  return (
    <div>
      <Navbar />
      <Form typ="ADDCRS" refs={refs} handle={handleClick} error={error} />
    </div>
  );
}

export default Page;
