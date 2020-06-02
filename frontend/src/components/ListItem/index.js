import React from 'react';
import './index.css';

export default function ListItem(props){
   return (
      <li className='list-item'>
         {props.children}
         <a className='item-title'><h2>{props.title}</h2></a>
      </li>
   )
}