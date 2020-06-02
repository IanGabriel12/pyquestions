import React from 'react';
import './index.css';
import MainHeader from '../components/MainHeader';
import PageHeader from '../components/PageHeader';
import ListItem from '../components/ListItem';
import EntityList from '../components/EntityList';

export default function ChapterList(props){
   const chapters = ['Entrada e saída', 'Estruturas Condicionais', 'Estruturas de repetição'];

   const chaptersElements = chapters.map((chapterName, index) => {
      return <ListItem title={chapterName} key={index}/>
   })

   return (
      <>
      <MainHeader />
      <PageHeader title='Capítulos' description='Aqui está a lista com todos os capítulos'/>
      <article> 
         <EntityList>
            {chaptersElements}
         </EntityList>
      </article>
      </>
   )
}