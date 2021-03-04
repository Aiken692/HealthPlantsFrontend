import './App.css';
import React, {Fragment, useState, useEffect, useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlantManagement from './pages/PlantManagement';

function App() {
  return (
    <>
    <Router>
    <PlantManagement />

    </Router>
    </>
  );
}

export default App;
