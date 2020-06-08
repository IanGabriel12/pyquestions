import React, { useState, useEffect } from 'react';
import './index.css';
import MainHeader from '../../components/MainHeader';
import PageHeader from '../../components/PageHeader';
import DiffitultyIndicator from '../../components/DifficultyIndicator';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function QuestionPage(){
   const { id: questionId } = useParams();
   const [chapter, setChapter] = useState(null);
   const [question, setQuestion] = useState(null);

   useEffect(() => {
      async function loadContent(){
         const question = (await api.get(`questions/${questionId}`)).data;

         const {name, description} = (await api.get(`chapters/${question.chapter_id}`)).data;

         setChapter({name, description});
         setQuestion(question);
      }
      
      loadContent();
   }, []);

   if(!question){
      return null;
   }
   
   return (
      <>
      <MainHeader />
      <PageHeader title={chapter.name} description={chapter.description}/>
      <article> 
         <div className='question-container'>
            <h2>
            {question.title} <DiffitultyIndicator />
            </h2>

            <div className='question-text'>
               {question.description.split('\n').map((text, index) => <p key={index}>{text}</p>)}
            </div>

            <a href={question.resolutionURL} target="_blank">Baixar Resolução</a>
         </div>
      </article>
      </>
   )
}