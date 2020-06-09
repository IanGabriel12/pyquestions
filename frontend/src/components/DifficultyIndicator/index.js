import React from 'react';
import './index.css';

export default function DifficultyIndicator(props){
   const difficultyColors = ['#2cdb35', '#fdd54f', '#ce4a41'];

   const { difficulty } = props;

   let difficultyBalls = [];
   for(let i=1; i<=3; i++){
      difficultyBalls.push((
         <div 
            className='difficulty-ball' 
            key={i}
            style={{
               backgroundColor: i <= difficulty ? difficultyColors[difficulty - 1] : '#aaaaaa',
            }}
         ></div>
      ))
   }

   return(
      <span className='difficulty-indicator'>
         {difficultyBalls}
      </span>
   )
}