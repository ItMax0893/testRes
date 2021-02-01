import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Header/>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/employees" render={() => <Employees />} />
   </BrowserRouter>
  );
}

export default App;
