import React, { useState } from "react";

const Login = (props) => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" onChange={(e)=>{
              setName(e.target.value)
            }} />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" onChange={(e)=>{
              setPassword(e.target.value)
            }} />
            <label>Password</label>
          </div>
          <center>
            <a href="#" onClick={(e)=>{
              props.handleLogin(name,password)
            }}>
              Sign In
              <span></span>
            </a>
          </center>
          <center>
            <a href="#" onClick={(e)=>{
              e.preventDefault()
              props.changeView('signUp')
            }}>
              Sign Up
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
