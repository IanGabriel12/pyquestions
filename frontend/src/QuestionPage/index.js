import React, { useState } from 'react';
import './index.css';
import MainHeader from '../components/MainHeader';
import PageHeader from '../components/PageHeader';
import DiffitultyIndicator from '../components/DifficultyIndicator';

export default function QuestionPage(props){
   const [ isResolutionOpen, setIsResolutionOpen ] = useState(false);
   return (
      <>
      <MainHeader />
      <PageHeader />
      <article> 
         <div className='question-container'>
            <h2>
            Hello world <DiffitultyIndicator />
            </h2>

            <div className='question-text'>
               <p>Crie um Programa que mostre o texto "Hello World"</p>
            </div>

            <a onClick={() => setIsResolutionOpen(!isResolutionOpen)}><h2>Resolução</h2></a>

            <code 
               style={{display: isResolutionOpen ? 'block' : 'none'}}
            >print('hello world')</code>
         </div>
      </article>
      </>
   )
}