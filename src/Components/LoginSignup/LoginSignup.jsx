import React, { useState } from 'react';
import "./LoginSignup.css";
import email_icon from '../Assets/email_icon.png'
import pass_icon from '../Assets/password_icon.png'
import user_icon from '../Assets/username_icon.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
          <img src={user_icon} alt="Icon for username" height="40px" />
          <input type="text" placeholder=" Username"/>
        </div>}
       
        <div className="input">
          <img src={email_icon} alt="Icon for email" height="45px" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={pass_icon} alt="Icon for password" height="45px" />
          <input type="password" placeholder="Password" />
        </div>
      </div>



      {action==="Sign Up"?<div></div>:  <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
      </div>}
    
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
