import React from 'react';
import {connect} from 'react-redux';

const PersonsComponent = (props)=>{
  return (<div  className="center-box">
    <h1> Deleted Employee List </h1>
    {
        props.deletedEmployeeList.length > 0
        ?
     <table >
        <thead>
          <tr> 
              <td>Name</td>
              <td>Contact</td>
              <td>Email</td>

          </tr>
          </thead>
          <tbody>
        {props.deletedEmployeeList.map(el => (
          <tr key={el.id}> 
            <td >{el.name}</td> 
            <td  style={{width:'120px'}} >{el.contact}</td> 
            <td  style={{width:'120px'}}>{el.emailId}</td> 
          </tr>
        ))}
        </tbody>
      </table>
      : <div class = "Show message"> Sorry !! There is no any Deleted Emplyee list available. </div> 
    }
  </div>);
}

const mapToLog = (state)=>{
  return {deletedEmployeeList : state.logReducer.deletedEmployeeList}
}

export default connect(mapToLog)(PersonsComponent);