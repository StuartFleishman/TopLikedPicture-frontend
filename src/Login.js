import React, {useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom";

const Login = () => {

  const [userInput, setUserInput] = useState({
    username: "", email: "", password: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userInput)
  }


  return (
    <div className="login">
      <Link to="/" >
      <img 
        className="login__logo"
        src="http://pngimg.com/uploads/triangle/triangle_PNG44.png" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <br></br>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h5>UserName</h5>
            <input value={userInput.username} onChange={(e) => setUserInput({...userInput, username: e.target.value})} type="text" />
            <br></br>
            <h5>Email</h5>
            <input value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})} type="email" />
            <br></br>
            <h5>Password</h5>
            <input value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})}  type="password" />
            <br></br>
            <input type="submit" value="Sign-In" />
        </form>
        
      </div>
      <br></br>
 
      <button className="create__account" value="CREATE AN ACCOUNT">CREATE AN ACCOUNT </button>
    </div>
  )
}

export default Login
