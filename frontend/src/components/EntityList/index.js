import React from 'react';
import './index.css';

export default function EntityList(props){
   return(
      <ul className='entity-list'>
         {props.children}
      </ul>
   )
}