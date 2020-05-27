import React from 'react';
import './HomePage.css';
import pythonLogo from './assets/images/python.png';
import pcBoy from './assets/images/pc-boy.png';
import pcGirl from './assets/images/pc-girl.png';

export default function HomePage(props) {
   return (
      <>
      <div className='decoration-rows'></div>
      <header>
         <div className='brand'>
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

      <div className='banner'>
         <h1>Bem-vindo ao seu site de estudos!</h1>
         <div className='img-wrapper'>
            <img src={pcBoy} alt='Boy programing' className='banner-image' id='pc-boy'/>
            <img src={pcGirl} alt='Girl programing' className='banner-image' id='pc-girl'/>
         </div>
         
         <div className='background-gradient'></div>
      </div>
      <footer>
         <a href='#'>Tente novas questões</a>
         <a href='#'>Prepare-se para olimpíadas</a>
      </footer>   
      </>
   )
}
