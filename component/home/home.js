import React from 'react';

import { connect } from "react-redux";
import * as CONST from '../../store/constant';
import './home.css';
 
const HomeComponent = (props)=>{
  return (
    <div>
      <h1> Employee List </h1>
      
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
            <td  className="delete-row" style={{width:'30px'}} onClick={props.deleteEmployee.bind(null,el.id)} >Delete</td> 
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    );
}

const mapStateToProps = state => {
  return { employeeList: state.employeeList };
};

const  mapDispatchToProps = (dispatch)  =>  {
  return {
    addEmployee: () => dispatch({type: CONST.ADD_EMPLOYEE}),
    deleteEmployee: (id) => dispatch({type:CONST.DELETE_EMPLOYEE, id: id}) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
