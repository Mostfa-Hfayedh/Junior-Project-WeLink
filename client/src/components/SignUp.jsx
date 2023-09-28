import React, { useState } from "react";

const SignUp = (props) => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [confirmPass,setConfirmPass] = useState('')


  return (
    <div className="login-box">
 
  <form>
    <div className="user-box">
      <input type="text" name="" required="" onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="email" name="" required="" onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={(e)=>{
        setPass(e.target.value)
      }}/>
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={(e)=>{
        setConfirmPass(e.target.value)
      }}/>
      <label>Confirm Password</label>
    </div>
    <center>
    <a href="#" onClick={(e)=>{
      e.preventDefault()
      props.handleSignUp({name:username,email:email,password:pass})
    }} >
           Sign up
       <span></span>
    </a></center>
  </form>
</div>
  );
};

export default SignUp;