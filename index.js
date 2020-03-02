import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
 
import RouterComponent from './component/navBar/navBar';
import LoginComponent from './login/login';
import {createStore } from 'redux';
import {Provider} from 'react-redux';

import reducerAction from './store/reducer/reducerAction';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        user : true
    };
    this.login = this.login.bind(this);
  }
  logout (){
    this.setState({user:null});
  }

  login(name, password){
    
    if(name &&  password){
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
const initialState = {
  employeeList: []
};
const store1 = createStore(reducerAction);
// console.log("-------",store1.getState());

render(<Provider store={store1}><App /></Provider>, document.getElementById('root'));

export default App;


