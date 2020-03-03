import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
 
import RouterComponent from './../component/navBar/navBar';
import LoginComponent from './../login/login';
import * as CONSTANT from '../store/constant';

import { connect } from "react-redux";


class StartApp extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  logout (){
    this.props.clearActionStore();
  }

  login(name, password){
    
    if(name &&  password){
      this.props.addUser({user: name})
    }
  }

  render() {
    return (
      <BrowserRouter>
        {this.props.user ?  
          <RouterComponent logout={this.logout.bind(this)}/>
          :
          <LoginComponent login = {this.login}/>
        }
        {
          this.props.user && 
          <h1>{this.props.user.name}</h1>
        }
      </BrowserRouter>
    );
  }
}

const mapToState = (state) =>{
  return {
    user : state.actionReducer.user
  }
};
const addUserToStore = (dispatch) =>{
  return {
    addUser : (userInfo) => dispatch({type : CONSTANT.USER_INFO, user : userInfo}),
    clearActionStore: ()=>dispatch({type : CONSTANT.CLEAR_STORE}),
    clearLog: ()=>dispatch({type : CONSTATN.CLEAR_STORE})
  }
}

export default connect(mapToState, addUserToStore)(StartApp);


