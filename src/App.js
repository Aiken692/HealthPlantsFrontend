import './App.css';
import React, {Fragment, useState, useEffect, useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import PlantManagement from './pages/PlantManagement';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about'  component={About} />

      </Switch>

    </Router>
    {/* <PlantManagement /> */}
    </>
  );
}

export default App;
