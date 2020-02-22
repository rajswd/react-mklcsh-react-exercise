import React,{Component} from 'react';
import './login.css';
class LoginComponent extends Component{
  
  clickToLogin = (event)=>{
    event.preventDefault();
    this.props.login(document.getElementById("name").value, 
    document.getElementById("pwd").value)
  }

  render() {
    return (
  <div className="login-container">
    <form>
      <div className="login">User Login</div>
      <div className="login">
        <label className="label"> User Name</label>
        <input id="name" type="text"  />
      </div>
      <div className="login">
        <label className="label"> User Password</label>
        <input id="pwd" type="password"  />
      </div>
      <div className="login">
        <button  onClick = {this.clickToLogin}> Login</button>
      </div>
    </form>
  </div>
  )};
}

export default LoginComponent;