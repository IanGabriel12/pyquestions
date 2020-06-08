import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChapterList from './pages/ChapterList';
import QuestionPage from './pages/QuestionPage';
import QuestionList from './pages/QuestionList';

export default function Router(props){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/questions/:id' component={QuestionPage}/>
            <Route path='/chapters/:id' component={QuestionList} />
            <Route path='/chapters' component={ChapterList}/>
            <Route path='/' component={HomePage}/>
         </Switch>
      </BrowserRouter>
   )
}