import './App.css';
import React, {Fragment, useState, useEffect, useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlantManagement from './pages/PlantManagement';

function App() {
  return (
    <>
    {/* <Router>
      <Switch>
        <Route path='/' exact component={PlantManagement} />

      </Switch>

    </Router> */}
    <PlantManagement />
    </>
  );
}

export default App;
