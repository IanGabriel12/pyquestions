import React from 'react';
import './Header.css';
import pythonLogo from '../../assets/images/python.png';
import brandBg from '../../assets/images/brand-bg.png';

export default function Header(props) {
   return (
      <>
      <header>
         <div className='brand'>
            <img src={brandBg} className='bg' alt='brand-bg'/>
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