import React from 'react';
import './QuestionItem.css';
import DifficultyIndicator from '../../components/DifficultyIndicator';

export default function QuestionItem(props){
   return(
      <li className='question-item'>
         <span className='difficulty'>
            Dificuldade: <DifficultyIndicator />
         </span>
         <a className='question-title'><h2>{props.title}</h2></a>
      </li>
   )
}