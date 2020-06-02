import React from 'react';
import './index.css';
import pcBoy from '../../../assets/images/pc-boy.png';
import pcGirl from '../../../assets/images/pc-girl.png';

export default function Banner(props){
   return(
      <div className='banner'>
         <h1>Bem vindo ao seu lugar de estudos</h1>
         <div className='img-wrapper'>
            <img src={pcBoy} alt='Boy using pc'/>
            <img src={pcGirl} alt='Girl programing'/>
         </div>
         <div className='bg-gradient'></div>
      </div>
   )
}