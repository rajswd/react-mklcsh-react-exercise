import React from 'react';
import {connect} from 'react-redux';
import * as CONST from '../../store/constant';

const NewPersonComponent = (props)=>{
  let counter = 10;
  const addEmployee = ()=>{

     let employee = {
                  name: "RAJ_ " + counter,
                  id: Date.now(),
                  contact: Date.now(),
                  emailId: "raj@raj.com" 
                };    

    props.addEmployee(employee);
    counter +=10;
  }

  return (
    <h1>
      <button onClick={addEmployee}> ADD Employee</button>
    </h1>
  );
}

const actionToAdd = (dispatch)=>{
  return {
    addEmployee :(emp)=> dispatch({type:CONST.ADD_EMPLOYEE, employee : emp })
  }
}
export default connect(null, actionToAdd)(NewPersonComponent);