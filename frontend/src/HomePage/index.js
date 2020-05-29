import React from 'react';
import './index.css';
import Header from '../components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

export default function HomePage(props){
   return(
      <div className='home-page'>
         <div className='decoration-rows'/>
         <Header />
         <Banner />
         <Footer />
      </div>
   )
}