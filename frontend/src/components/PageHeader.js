import React from 'react';
import './PageHeader.css';

export default function PageHeader(props){
   return (
      <div className='page-header'>
         <h1>entrada e saída</h1>
         <p>Entradas e saídas são a comunicação do programa com o mundo real,
         a forma como o programa recebe os dados a serem processados do mundo real e 
         devolve a este a resposta</p>
      </div>
   )
}