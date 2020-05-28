import React from 'react';
import './index.css';
import Header from './components/Header';
import pcBoy from '../assets/images/pc-boy.png';
import pcGirl from '../assets/images/pc-girl.png';

export default function HomePage(props){
   return(
      <>
      <Header />
      <div className='banner'>
         <h1>Bem vindo ao seu lugar de estudos</h1>
         <div className='img-wrapper'>
            <img src={pcBoy}/>
            <img src={pcGirl}/>
         </div>
         <div className='bg-gradient'></div>
      </div>
      </>
   )
}