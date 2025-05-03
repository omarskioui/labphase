import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/action'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handlesubmit=(e)=>{e.preventDefault();dispatch(login({email,password},navigate))}
  return (
    <div>
        <div className="container-signin">
  <div className="login-box">
    <svg className="lock-icon" viewBox="0 0 24 24" width={48} height={48}>
      <path
        d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4z"
        fill="var(--gold-crayola)"
      />
    </svg>
    <h2>Admin Sign In</h2>
    <form id="loginForm">
      <div className="input-group">
        <input onChange={(e)=>setemail(e.target.value)} type="email" id="username" required="" />
        <label htmlFor="username">Email</label>
      </div>
      <div className="input-group">
        <input onChange={(e)=>setpassword(e.target.value)} type="password" id="password" required="" />
        <label htmlFor="password">Password</label>
      </div>
      <button onClick={handlesubmit} type="submit">Sign In</button>
    </form>
    <div id="error-message" className="error" />
  </div>
</div>

    </div>
  )
}

export default Signin