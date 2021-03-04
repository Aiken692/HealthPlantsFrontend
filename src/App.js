import React from 'react';
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Conditions from './Pages/Conditions';
import Remedies from './Pages/Remedies';
import RemedyManagement from './Pages/RemedyManagement';
import PlantManagement from './Pages/PlantManagement';
import ConditionManagement from './Pages/ConditionsManagement';
import Cardiac from './Pages/Cardiac';
import CardiacDetail from './Pages/CardiacDetail';
import Joint from './Pages/Joint';
import JointDetail from './Pages/JointDetail';
import UserManagement from './Pages/UserManagement';
import {CssBaseline } from '@material-ui/core';
import Plants from './Pages/Plants';
import variantsManagement from './Pages/variantsManagement';
import HomePage from './Pages/index'
import Login from './components/Login/Login'
import About from './Pages/About';
import Contact from './Pages/Contact';
import GlobalStyle from './globalStyles'
import PlantProfile from './components/PlantProfile'
import ReviewsManagement from './Pages/ReviewsManagement';


function App() {
  return (

    <> 
     <GlobalStyle/>  
      <Router>      
         <Switch>
          <Route path='/' exact component={HomePage} />
           <Route path='/remedies' component={Remedies}/>
           <Route path='/plantManagement' component={PlantManagement}/>
           <Route path='/userManagement' component={UserManagement}/>
           <Route path='/conditionManagement' component={ConditionManagement}/>
          
           <Route path='/plant/:id' component={PlantProfile}/>

          <Route path='/about'  component={About} />
          <Route path='/login'  component={Login} />
          <Route path='/contact' component={Contact}/>
          <Route path='/condition' component={Conditions}/>
          <Route path='/cardica' component={Cardiac}/>
          <Route path='/cardicadetail' component={CardiacDetail}/>
          <Route path='/joint' component={Joint}/>
          <Route path='/jointdetail' component={JointDetail}/>
          <Route path='/remedyManagement' component={RemedyManagement}/>
          <Route path='/variantManagement' component={variantsManagement}/>
          <Route path='/reviewsManagement' component={ReviewsManagement}/> 
          <Route path='/plants' component={Plants}/> 
                    
         </Switch> 
      </Router> 
      <CssBaseline/> 
    </>
  );
}

export default App;
