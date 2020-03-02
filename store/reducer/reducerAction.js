import * as CONST from '../constant';

const initialState = {
  employeeList: []
};

const reducerAction = (state = initialState, action) => {
  
  switch(action.type){
    case CONST.ADD_EMPLOYEE : 
            return Object.assign({}, state, {
                      employeeList: state.employeeList.concat(action.employee)
                    });
    case CONST.DELETE_EMPLOYEE : 
          console.log(action.id);
          let index, _empList = [...state.employeeList];
          _empList = _empList.filter(emp => emp.id !== action.id);
          return Object.assign({}, state, {employeeList : _empList});
    }  
  
  return state;

};

export default reducerAction;