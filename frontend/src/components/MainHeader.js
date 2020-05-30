import React from 'react';
import './MainHeader.css';
import pythonLogo from '../assets/images/python.png';

//using img for now, changing to SVG later
import brandBg from '../assets/images/brand-bg.png';

export default function MainHeader(props) {
   const headerStyles = props.style // in some pages, the header has different styles
   return (
      <>
      <header style={headerStyles}> 
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
            <a href='#'>E-book</a>
         </nav>
      </header> 
      </>
   )
}