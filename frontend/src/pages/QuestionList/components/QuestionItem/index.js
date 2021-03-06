import React from 'react';
import './index.css';
import DifficultyIndicator from '../../../../components/DifficultyIndicator';
import ListItem from '../../../../components/ListItem';

export default function QuestionItem(props){
   return(
      <ListItem title={props.title} goesTo={props.goesTo}> 
         <span className='difficulty'>
            Dificuldade: <DifficultyIndicator difficulty={props.difficulty}/>
         </span>
      </ListItem>
   )
}