import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route exact path='/main' component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
