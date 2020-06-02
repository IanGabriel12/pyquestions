import React from 'react';
import './index.css';
import pythonLogo from '../../assets/images/python.png';
import { Link } from 'react-router-dom';

//using img for now, changing to SVG later
import brandBg from '../../assets/images/brand-bg.png';

export default function MainHeader(props) {
   const headerStyles = props.style // in some pages, the header has different styles
   return (
      <>
      <header style={headerStyles}> 
         <div className='brand'>
            <img src={brandBg} className='bg' alt='brand-bg'/>
            <div className='logo'>
               <img src={pythonLogo} alt='Python logo'/>
               <Link to='/'>PyQuestions</Link>
            </div>
         </div>
         <nav>
            <Link to='/chapters'>Banco de questões</Link>
            <a href='#'>Sobre nós</a>
            <a href='#'>E-book</a>
         </nav>
      </header> 
      </>
   )
}