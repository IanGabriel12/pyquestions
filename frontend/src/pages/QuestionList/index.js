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
   const [selectedDifficulty, setSelectedDifficulty] = useState(0);

   useEffect(() => {
      api.get(`chapters/${chapterId}?difficulty=${selectedDifficulty}`)
         .then(response => {
            const { name, description } = response.data;
            setQuestions(response.data.questions);
            setChapter({ name, description });
         })
   }, [selectedDifficulty]);

   function handleDifficultySelect(event){
      setSelectedDifficulty(event.target.value);
   }

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
         <select id='filter-button' onChange={handleDifficultySelect}>
            <option value={0}>Escolha uma dificuldade:</option>
            <option value={1}>Fácil</option>
            <option value={2}>Médio</option>
            <option value={3}>Difícil</option>
         </select>
         <EntityList>
            {listElements}
         </EntityList>
      </article>
      </>
   )
}