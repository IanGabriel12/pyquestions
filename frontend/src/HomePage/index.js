import React from 'react';
import './index.css';
import MainHeader from '../components/MainHeader';
import Banner from './components/Banner';
import Footer from './components/Footer';

export default function HomePage(props){
   return(
      <div className='home-page'>
         <div className='decoration-rows'/>
         <MainHeader />
         <Banner />
         <Footer />
      </div>
   )
}