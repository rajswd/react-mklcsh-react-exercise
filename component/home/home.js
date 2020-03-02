import React from 'react';
import { connect } from "react-redux";
import * as CONST from '../../store/constant';
 
const HomeComponent = (props)=>{
  return (
    <div>
      <h1> HomeComponent </h1>
      
       <ul>
        {props.employeeList.map(el => (
          <li key={el.id}> 
            <td >{el.name} ({el.id})</td> 
            <td  style={{width:'120px'}} >{el.contact}</td> 
            <td  style={{width:'120px'}}>{el.emailId}</td> 
            <td  style={{width:'30px'}} onClick={props.deleteEmployee.bind(null,el.id)} >Delete</td> 
          </li>
        ))}
      </ul>
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
