import React from 'react';
import './DifficultyIndicator.css';

export default function DifficultyIndicator(props){
   return(
      <span className='difficulty'>Dificuldade: 
         <div className='difficulty-indicator'>
            <div className='difficulty-ball'></div>
            <div className='difficulty-ball'></div>
            <div className='difficulty-ball'></div>
         </div>
      </span>
   )
}