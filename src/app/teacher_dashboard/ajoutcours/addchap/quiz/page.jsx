"use client"
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Form from '@/app/ui/Form'
import React, { useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
function Page() {
    const nbqRef = useRef(null);
    const [numQuestions, setNumQuestions] = useState(5);
    const [error, setError] = useState("");
    const router = useRouter();
    const course = JSON.parse(localStorage?.getItem("course"));
      const searchParams = useSearchParams()
  const chapter = searchParams.get('chapter')
    const nbchapter = Number(searchParams.get('nbchapter'))
    const [quizData, setQuizData] = useState({
        questions: Array(5).fill().map(() => ({
            text: '',
            responses: []
        }))
    });
       const questionRefs = useRef([]);
    if (questionRefs.current.length !== numQuestions) {
        questionRefs.current = Array(numQuestions)
            .fill()
            .map((_, i) => questionRefs.current[i] || React.createRef());
    }
    
 const refs = {
        nbqRef,
        ...Object.fromEntries(
            questionRefs.current.map((ref, i) => [`question${i + 1}`, ref])
        )
    };

    const handleQuestionChange = () => {
        const value = parseInt(nbqRef.current?.value, 10);
        if (!isNaN(value) && value > 0 && value <= 20) {
            setNumQuestions(value);
            setQuizData({
                questions: Array(value).fill().map((_, i) => ({
                    ...quizData.questions[i] || { text: '', responses: [] },
                    responses: quizData.questions[i]?.responses || []
                }))
            });
        }
    };

    const handleResponseChange = (e,questionIndex, responseId, isRadio = false) => {
        const { value } = e.target;
    
        
        setQuizData(prev => {
            const newQuestions = [...prev.questions];
            if (newQuestions[questionIndex]) {
                newQuestions[questionIndex].text = refs[`question${questionIndex + 1}`]?.current?.value || '';
            }
            if (isRadio) {
                // Gestion de la bonne réponse
                newQuestions[questionIndex].responses.forEach((r, i) => {
                    r.isCorrect = (i === responseId);
                });
            } else {
                // Gestion du texte de réponse
                if (!newQuestions[questionIndex].responses[responseId]) {
                    newQuestions[questionIndex].responses[responseId] = { text: value, isCorrect: false };
                } else {
                    newQuestions[questionIndex].responses[responseId].text = value;
                }
            }
            
            
            return { questions: newQuestions };
        });
    };
const handlesubmit = (e) => {
    e.preventDefault();
   /* const quiz = {
        courseId: course._id,
        questions: quizData.questions.map((q) => ({
            text: q.text,
            responses: q.responses.map((r) => ({
                text: r.text,
                isCorrect: r.isCorrect
            }))
        }))
    };*/
for(var i=0;i<quizData.questions.length;i++){
    const question = quizData.questions[i];
    if(question.text.trim() === ""){
        setError("Please fill all the questions");
        return;
    }
    console.log("Question",i+1,":",question.text);
    var test=false;
    for(var j=0;j<question.responses.length;j++){
        const response = question.responses[j];
        if(response.text.trim() === ""){
            setError("Please fill all the answers");
            return;
        }
        if(response.isCorrect){
            test=true;
        }
       

        console.log("Réponse",j+1,":",response.text,"(Correct:",response.isCorrect,")");
    }
if(!test){
        setError("Please select at least one correct answer for each question");
        return;
    }
}
    setError("");
       console.log(course)
    const quiz = {
        questions: quizData.questions.map((q) => ({
            text: q.text,
            responses: q.responses.map((r) => ({
                text: r.text,
                isCorrect: r.isCorrect
            }))
        }))
    };
   // course.chapters[chapter-1].quiz=quiz;
    if (!course) {
        alert("Course not found");
        return;
    }
    console.log(chapter)
if (course && Array.isArray(course.chapters) && course.chapters[chapter - 1]) {
  course.chapters[chapter - 1].quiz = quiz;
} else {
  console.error("Chapitre inexistant ou mal initialisé !");
}

    console.log(course)
//je veux reourner à la page précédente
    localStorage.setItem("course", JSON.stringify(course));
    router.push(`/teacher_dashboard/ajoutcours/addchap?nbchapter=${nbchapter}`);
  



}
    return (
        <div>
            <Navbar/>
            <Form 
                typ="ADDQUIZ"  
                nbchap="" 
                error={error}
                handle={handlesubmit} 
                nq={numQuestions} 
                handleChange={handleQuestionChange} 
                refs={refs} 
                hc={handleResponseChange} // Ici on passe la fonction correctement
            />
            <Footer/>
        </div>
    )
}

export default Page;