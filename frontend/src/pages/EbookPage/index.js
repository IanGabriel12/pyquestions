import React from 'react';
import './index.css';
import MainHeader from '../../components/MainHeader';
import PageHeader from '../../components/PageHeader';
import capaEbook from '../../assets/images/capa-ebook.png';

export default function EbookPage(){
   return (
      <>
         <MainHeader />
         <PageHeader 
            title='E-book' 
            description='Aqui você baixar a nossa apostila em PDF com todas as questões do site'
         />
         <article className='e-book-container'>
            <img src={capaEbook}/>
            <div className='content-wrapper'>
               <p> 
                  Para acessar a apostila em PDF contendo todas as questões presentes em nosso
                  site, basta clicar no botão abaixo:
               </p>
               <a href='#'>Baixe agora</a>
            </div>
         </article>
      </>
   )
}