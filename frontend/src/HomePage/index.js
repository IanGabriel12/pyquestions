import React from 'react';
import './index.css';
import Header from './components/Header';
import pcBoy from '../assets/images/pc-boy.png';
import pcGirl from '../assets/images/pc-girl.png';

export default function HomePage(props){
   return(
      <div className='home-page'>
         <div className='decoration-rows'/>
         <Header />
         <div className='banner'>
            <h1>Bem vindo ao seu lugar de estudos</h1>
            <div className='img-wrapper'>
               <img src={pcBoy}/>
               <img src={pcGirl}/>
            </div>
            <div className='bg-gradient'></div>
         </div>
         <footer>
            <a href='#'>Tente novas questões</a>
            <a href='#'>Prepare-se para olimpíadas</a>
         </footer>
      </div>
   )
}