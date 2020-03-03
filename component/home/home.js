import React from 'react';

import { connect } from "react-redux";
import * as CONST from '../../store/constant';
import './home.css';
 
const HomeComponent = (props)=>{

  const deleteEmployee = (employee)=>{
    props.deleteEmployee(employee.id);
    props.logEmployee(employee);
  };

  return (
    <div className="center-box">
      <h1> Employee List </h1>
      {
        props.employeeList.length > 0
        ?
       <table >
        <thead>
          <tr> 
              <td>Name</td>
              <td>Contact</td>
              <td>Email</td>
              <td>Action</td>

          </tr>
          </thead>
          <tbody>
        {props.employeeList.map(el => (
          <tr key={el.id}> 
            <td >{el.name}</td> 
            <td  style={{width:'120px'}} >{el.contact}</td> 
            <td  style={{width:'120px'}}>{el.emailId}</td> 
            <td  className="delete-row" style={{width:'30px'}} onClick={deleteEmployee.bind(null, el)} >Delete</td> 
          </tr>
        ))}
        </tbody>
      </table>
      : <div className = "Show message"> Sorry !! There is no any Emplyee available. </div>
      }
    </div>
    );
}

const mapStateToProps = state => {
  return { employeeList: state.actionReducer.employeeList };
};

const  mapDispatchToProps = (dispatch)  =>  {
  return {
    deleteEmployee: (id) => dispatch({type:CONST.DELETE_EMPLOYEE, id: id}),
    logEmployee : (employee) => dispatch({type:CONST.LOG_EMPLOYEE, employee:employee}) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
