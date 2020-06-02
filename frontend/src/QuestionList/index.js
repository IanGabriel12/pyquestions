import React from 'react';
import MainHeader from '../components/MainHeader';
import PageHeader from '../components/PageHeader';
import EntityList from '../components/EntityList';
import QuestionItem from './components/QuestionItem';

import './index.css';

export default function ChapterPage(props){
   //this is the same gradient used in the banner on landing page
   //a variable is needed for this
   const bgGradient = 'linear-gradient(172deg, #349ff6 0%, #8cb7ad 52%, #fdd54f 100%)';

   //just for testing, removing later.
   const qList = [
      'Hello world', 
      'Repetição de palavras', 
      'Média ponderada',
      'um nome muito grande para testar quebra de linha'
   ] 
   const listElements = qList.map((text, index) => {
      return (
         <QuestionItem key={index} title={text}/>
      )
   })

   return (
      <>
      <MainHeader style={{ background: bgGradient }}/>
      <PageHeader />
      <article>
         <button id='filter-button'>Filtrar questões</button>
         <EntityList>
            {listElements}
         </EntityList>
      </article>
      </>
   )
}