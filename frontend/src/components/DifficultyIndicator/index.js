import React from 'react';
import './index.css';

export default function DifficultyIndicator(props){
   return(
      <span className='difficulty-indicator'>
         <div className='difficulty-ball'></div>
         <div className='difficulty-ball'></div>
         <div className='difficulty-ball'></div>
      </span>
   )
}