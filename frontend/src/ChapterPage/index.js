import React from 'react';
import MainHeader from '../components/MainHeader';
import './index.css';

export default function ChapterPage(props){
   //this is the same gradient used in the banner on landing page
   //a variable is needed for this
   const bgGradient = 'linear-gradient(172deg, #349ff6 0%, #8cb7ad 52%, #fdd54f 100%)';
   return (
      <>
      <MainHeader style={{ background: bgGradient }}/>
      <div className='chapter-header'>
         <h1>entrada e saída</h1>
         <p>Entradas e saídas são a comunicação do programa com o mundo real,
         a forma com o o programa recebe os dados a serem processados do mundo real e 
         devolve a este a resposta</p>
      </div>
      </>
   )
}