import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChapterList from './ChapterList';
import QuestionPage from './QuestionPage';
import QuestionList from './QuestionList';

export default function Router(props){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/questions/:id' component={QuestionPage}/>
            <Route path='/chapters' component={ChapterList}/>
            <Route path='/' component={HomePage}/>
         </Switch>
      </BrowserRouter>
   )
}