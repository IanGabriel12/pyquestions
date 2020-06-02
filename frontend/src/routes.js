import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/index';
import ChapterPage from './ChapterPage/index';
import QuestionPage from './QuestionPage/index';

export default function Router(props){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/questions/:id' component={QuestionPage}/>
            <Route path='/chapters' component={ChapterPage}/>
            <Route path='/' component={HomePage}/>
         </Switch>
      </BrowserRouter>
   )
}