import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
 
import RouterComponent from './component/navBar/navBar';
import LoginComponent from './login/login';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        user : null
    };
    this.login = this.login.bind(this);
  }
  logout (){
    this.setState({user:null});
  }

  login(name, password){
    
    if(name && name === password){
      this.setState({user: name});
    }
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.user ?  
          <RouterComponent logout={this.logout.bind(this)}/>
          :
          <LoginComponent login = {this.login}/>
        }
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
