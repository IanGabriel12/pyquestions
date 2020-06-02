import React from 'react';
import './index.css';
import MainHeader from '../components/MainHeader';
import PageHeader from '../components/PageHeader';
import ListItem from '../components/ListItem';

export default function ChapterList(props){
   const chapters = ['Entrada e saída', 'Estruturas Condicionais', 'Estruturas de repetição'];

   return (
      <>
      <MainHeader />
      <PageHeader title='Capítulos' description='Aqui está a lista com todos os capítulos'/>
      
      </>
   )
}