import * as CONST from '../constant';

const initilaState = {
  deletedEmployeeList:[]
};

const logReducer = (state = initilaState, action)=>{
  
  switch(action.type){

    case CONST.LOG_EMPLOYEE : 
         
          return Object.assign({},state, {
                  deletedEmployeeList : state.deletedEmployeeList.concat(action.employee)
                });
  }

  return state; 
};

export default logReducer;