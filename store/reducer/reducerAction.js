import * as CONST from '../constant';

const initialState = {
  employeeList: [],
  user : null
};

const reducerAction = (state = initialState, action) => {
  
  switch(action.type){
    case CONST.ADD_EMPLOYEE : 
            return Object.assign({}, state, {
                      employeeList: state.employeeList.concat(action.employee)
                    });
    case CONST.DELETE_EMPLOYEE : 
          let _empList = [...state.employeeList];
          _empList = _empList.filter(emp => emp.id !== action.id);
          return Object.assign({}, state, {employeeList : _empList});

    case CONST.USER_INFO : 
        return Object.assign({}, state , {user: action.user});

    case CONST.CLEAR_STORE : 
        return Object.assign({}, state , {
            user: null,
            employeeList : []}
        );
    }  
  
  return state;

};

export default reducerAction;