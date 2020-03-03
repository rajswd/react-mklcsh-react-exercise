import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './navBar.css';

import HomeComponent from '../../component/home/home';
import PersonComponent from '../../component/person/person/person';
import PersonsComponent from '../../component/person/persons';
import NewPersonComponent from '../../component/newPerson/newPerson';


const RouterComponent = (props) =>{
  
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li> 
            <Link to="/"> Home </Link>
            <Link to="/addEmployee"> Add Employee </Link>          
            <Link to="/deletedEmployeeList"> Deleted Employee List </Link>
            <Link onClick={props.logout}> Logout </Link>            

          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/deletedEmployeeList" exact  component={PersonsComponent} />
        <Route path="/addEmployee" exact  component={NewPersonComponent} />
        
        <Route path="/person/:id" component={PersonComponent} /> 
      </Switch>
    </div>
  );
}

export default RouterComponent;