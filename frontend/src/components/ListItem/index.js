import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function ListItem(props){
   return (
      <li className='list-item'>
         {props.children}
         <Link to={props.goesTo} className='item-title'><h2>{props.title}</h2></Link>
      </li>
   )
}