import React from 'react';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {CssBaseline } from '@material-ui/core';
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Plants from './pages/plants';
import PlantProfile from './components/plantProfile'
import Conditions from './pages/conditions';
import Cardiac from './pages/cardiac';
import CardiacDetail from './pages/cardiacDetail';
import Joint from './pages/joint';
import JointDetail from './pages/jointDetail';
import Remedies from './pages/remedies';
import Login from './pages/login';
import PlantManagement from './pages/plantManagement';
import AddPlants from './pages/addPlant';
import RemedyManagement from './pages/remedyManagement';
import ConditionManagement from './pages/conditionsManagement';
import UserManagement from './pages/userManagement';
import variantsManagement from './pages/variantsManagement';
import ReviewsManagement from './pages/reviewsManagement';
import GlobalStyle from './globalStyles';


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
          <Route path='/Addplant' component={AddPlants}/> 
                    
                    
         </Switch> 
      </Router> 
      <CssBaseline/> 
    </>
  );
}

export default App;
