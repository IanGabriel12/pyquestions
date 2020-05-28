import React from 'react';
import './HomePage.css';
import pythonLogo from './assets/images/python.png';
import brandBg from './assets/images/brand-bg.png';
import pcBoy from './assets/images/pc-boy.png';
import pcGirl from './assets/images/pc-girl.png';

export default function HomePage(props) {
   return (
      <>
      <div className='decoration-rows'></div>
      <header>
         <div className='brand'>
            <img src={brandBg} className='bg'/>
            <div className='logo'>
               <img src={pythonLogo} alt='Python logo'/>
               <span>PyQuestions</span>
            </div>
         </div>
         <nav>
            <a href='#'>Banco de questões</a>
            <a href='#'>Sobre nós</a>
         </nav>
      </header> 
      </>
   )
}
