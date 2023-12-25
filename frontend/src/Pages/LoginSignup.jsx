import React from 'react'
import "./CSS/loginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
        <div className="loginSignup_container">
            <h1>Sign Up!</h1>
            <div className="loginSignup_feilds">
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='Email Address' />
              <input type="password" placeholder='password' />
            </div>
            <button>Continue</button>
        <p className='loginsignup_login'>Already Have An Account? <span className='login'>Login</span></p>
            <div className="loginSignup_agree">
          <input type="checkbox" name="" id="checkbox" />
          <label for="checkbox">By ontinuing Im Agree To Use Privacy & Policy.</label>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
