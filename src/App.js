import './App.css';
import React, {Fragment, useState, useEffect, useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import Plants from './pages/plants';
import PlantManagement from './pages/PlantManagement';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about'  component={About} />
        <Route path='/contact' component={Contact}/> 
          <Route path='/plants' component={Plants}/> 

      </Switch>

    </Router>
    {/* <PlantManagement /> */}
    </>
  );
}

export default App;
