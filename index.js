import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import reducerAction from './store/reducer/reducerAction';
import logReducer from './store/reducer/reducerLog';

import StartApp from './start/start'


import './style.css';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
       
       <StartApp />
      </BrowserRouter>
    );
  }
}
const rootReducers = combineReducers({
  actionReducer : reducerAction,
  logReducer    : logReducer
})
const store1 = createStore(rootReducers);
// console.log("-------",store1.getState());

render(<Provider store={store1}><App /></Provider>, document.getElementById('root'));

export default App;


