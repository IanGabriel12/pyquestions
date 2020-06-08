import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';
import PageHeader from '../../components/PageHeader';
import EntityList from '../../components/EntityList';
import QuestionItem from './components/QuestionItem';
import api from '../../services/api';
import './index.css';

export default function ChapterPage(){
   const { id : chapterId} = useParams();
   const [chapter, setChapter] = useState({});
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      api.get(`chapters/${chapterId}`).then(response => {
         const { name, description } = response.data;
         setQuestions(response.data.questions);
         setChapter({ name, description });
      })
   }, [])

   //this is the same gradient used in the banner on landing page
   const bgGradient = 'linear-gradient(172deg, #349ff6 0%, #8cb7ad 52%, #fdd54f 100%)';


   const listElements = questions.map(question => {
      return (
         <QuestionItem 
            key={question.id} 
            title={question.title} 
            difficulty={question.difficulty}
            goesTo={`/questions/${question.id}`}
         />
      )
   })

   return (
      <>
      <MainHeader style={{ background: bgGradient }}/>
      <PageHeader title={chapter.name} description={chapter.description}/>
      <article>
         <button id='filter-button'> Filtrar questões </button>
         <EntityList>
            {listElements}
         </EntityList>
      </article>
      </>
   )
}