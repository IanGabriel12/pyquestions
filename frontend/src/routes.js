import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChapterList from './pages/ChapterList';
import QuestionPage from './pages/QuestionPage';
import QuestionList from './pages/QuestionList';
import EbookPage from './pages/EbookPage';

export default function Router(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/questions/:id' component={QuestionPage}/>
            <Route path='/chapters/:id' component={QuestionList} />
            <Route path='/chapters' component={ChapterList}/>
            <Route path='/ebook' component={EbookPage}/>
            <Route path='/' component={HomePage}/>
         </Switch>
      </BrowserRouter>
   )
}