import React, { useState, useEffect } from 'react';
import './index.css';
import MainHeader from '../../components/MainHeader';
import PageHeader from '../../components/PageHeader';
import ListItem from '../../components/ListItem';
import EntityList from '../../components/EntityList';
import api from '../../services/api';

export default function ChapterList(){
   const [chapters, setChapters] = useState([]);

   useEffect(() => {
      api.get('chapters').then((response) => {
         setChapters(response.data);
      });
   }, [])

   const chaptersElements = chapters.map(chapter => {
      return (
         <ListItem 
            title={chapter.name} 
            key={chapter.id} 
            goesTo={`/chapters/${chapter.id}`}
         />
      )
   });

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
   );
}