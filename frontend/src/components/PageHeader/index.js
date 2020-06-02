import React from 'react';
import './index.css';

export default function PageHeader(props){
   return (
      <div className='page-header'>
         <h1>{props.title}</h1>
         <p>{props.description}</p>
      </div>
   )
}