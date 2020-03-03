import React, {Component}from 'react';
import {connect} from 'react-redux';
import * as CONST from '../../store/constant';

class NewPersonComponent extends Component{
   constructor(props) {
    super(props);
    this.state = { showMessage : false};
    this.addEmployee = this.addEmployee.bind(this);
  }
  counter = 10;
  
  addEmployee = ()=>{
    this.setState({showMessage: true});
      let employee = {
                    name: "RAJ_ " + this.counter,
                    id: Date.now(),
                    contact: Date.now(),
                    emailId: "raj@raj.com" 
                  };    

      props.addEmployee(employee);
      this.counter +=10;
      setTimeout(()=>{
        this.setState({showMessage: false});}, 3000);    
    }
  render(){
  return (
    <div>
      <h1>
        <button onClick={this.addEmployee}> ADD Employee</button>
      </h1>
      <div className={this.state.showMessage == true  ? 'show-message': 'hide-message'}>
        <div>
          Employee Is added to List, Please navigate to Home Page to see the added Employee.
        </div>
      </div>
    </div>
  );
  }
}

const actionToAdd = (dispatch)=>{
  return {
    addEmployee :(emp)=> dispatch({type:CONST.ADD_EMPLOYEE, employee : emp })
  }
}
export default connect(null, actionToAdd)(NewPersonComponent);