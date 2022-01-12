import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<IndexPage />}/>
        <Route exact path='/main' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
