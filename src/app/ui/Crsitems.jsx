"use client";
import React, { useState, useEffect } from 'react';


function Crsitems(chapters) {
  const courseContent = chapters?.chapters || [];
for(let i = 0; i < courseContent.length; i++) {
  if(i%2 === 0) 
  courseContent[i] .video='/video.mp4';
else 
  courseContent[i] .pdf='/flexbox.pdf';}
  const [currentChapter, setCurrentChapter] = useState(null);
  const [step, setStep] = useState('start'); // 'start', 'video', 'quiz', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);

  const allCompleted = completedChapters.length === courseContent.length;
  const current = currentChapter !== null ? courseContent[currentChapter] : null;

  useEffect(() => {
    if (step === 'result' && currentChapter !== null && !completedChapters.includes(currentChapter)) {
      setCompletedChapters(prev => [...prev, currentChapter]);
    }
  }, [step, currentChapter]);

  const startChapter = (index) => {
    setCurrentChapter(index);
    setStep('video');
    setCurrentQuestion(0);
    setUserAnswers(Array(courseContent[index].quiz.length).fill(null));
    setScore(0);
  };

  const handleVideoEnd = () => {
    setStep('quiz');
  };

  const handleReadPdf = () => {
    setStep('quiz');
  };

  const handleOptionSelect = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);
    console.log(userAnswers)
  };

  const handleNext = () => {
    const quiz = current.quiz.questions;
    
    if (currentQuestion < quiz.length -1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const correct = userAnswers.reduce((acc, answer, i) => acc + (answer.isCorrect ? 1 : 0), 0);
      setScore(correct);
      setStep('result');
    }
  };

  return (
    <div>
         {allCompleted && (
        <div className="congrats" style={{ padding: '20px', background: '#d4edda', color: '#155724', marginBottom: '20px', borderRadius: '5px' }}>
          🎉 Félicitations ! Vous avez terminé tous les chapitres !
        </div>
      
      )}
    <div className="chapboard">
 
  <br />
      <div className="chaplist">
        {courseContent.map((chapter, index) => (
          <div
            key={index}
            className="chapter"
            onClick={() => startChapter(index)}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
          >
            <h4>
              Chapter {chapter.chapter}: {chapter.chapterName}
              {completedChapters.includes(index) && <span style={{ color: 'green' }}> ✅</span>}
            </h4>
          </div>
        ))}
      </div>

      <div className="display">
        {/* Support vidéo/PDF */}
        {step === 'video' && current && (
          <div className="chapter media">
         
            {current.video && (
              <div>
                   <h4>Chapter {current.chapter}: {current.chapterName} - Video</h4>
              <video width="100%" controls onEnded={handleVideoEnd}>
                <source src={current.video} type="video/mp4" />
              </video>
              </div>
            )}
            {current.pdf && (
              
              <div>
                 <h4>Chapter {current.chapter}: {current.chapterName} - PDF</h4>
                <iframe src={current.pdf} width="100%" height="500px" title="PDF" />
                <div style={{ marginTop: '10px' }}>
                  <button onClick={handleReadPdf}>J'ai terminé la lecture</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quiz */}
        {step === 'quiz' && current && (
<div className="chapter quiz">
  <h4>Quiz {currentChapter + 1}</h4>

  {current.quiz.questions.length > 0 && (
    <div>
      {/* Afficher la question actuelle */}
      <p><strong>{current.quiz.questions[currentQuestion].text}  {currentQuestion}/{current.quiz.questions.length}</strong></p>

      <ul>
        {current.quiz.questions[currentQuestion].responses.map((response, i) => (
          <li
            key={response._id}
            onClick={() => handleOptionSelect(response)}
            className={`rep-item ${userAnswers[currentQuestion] === response ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={userAnswers[currentQuestion] === response}
              readOnly
            />
            <label>{response.text}</label>
          </li>
        ))}
      </ul>

      <div className="navigation">
        <button
          className='suiv'
          onClick={handleNext}
          disabled={userAnswers[currentQuestion] === null}
        >
          {currentQuestion === current.quiz.questions.length  ? 'Voir le résultat' : 'Suivant'}
        </button>
      </div>
    </div>
  )}
</div>

        )}

        {/* Résultat */}
        {step === 'result' && (
          <div className="chapter result">
            <h4>Résultat du {current?.title}</h4>
            <p>Score : {score} / {current?.quiz.questions.length}</p>
            <button onClick={() => setStep('start')}>Retour aux chapitres</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Crsitems;
