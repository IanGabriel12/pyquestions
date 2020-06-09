import React, { useState, useEffect } from 'react';
import './index.css';
import MainHeader from '../../components/MainHeader';
import PageHeader from '../../components/PageHeader';
import DiffitultyIndicator from '../../components/DifficultyIndicator';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import InputExampleTable from './components/InputExampleTable';
import Markdown from 'react-markdown';

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

            <Link to={`/chapters/${question.chapter_id}`} className='go-back'>
               <FiArrowLeft />
            </Link>

            <div className='container-header'>
               <h2>{question.title}</h2>
               <DiffitultyIndicator difficulty={question.difficulty}/>
            </div>
            
            <div className='question-text'>
               <Markdown source={question.description}/>
            </div>

            <div className='container-footer'>
               <InputExampleTable inputExamples={question.input_examples}/>
               <a 
                  href={question.resolutionURL} 
                  target="_blank" 
                  className='download-link'
               >Baixar Resolução</a>
            </div>
            
         </div>
      </article>
      </>
   )
}