import React, {useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom";
import {login, loginUser } from './actions/userAction'
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'
import { auth } from "./firebase"

const Login = ({login, message, loginUser}) => {

  const [userInput, setUserInput] = useState({
    name: "", email: "", password: ""
  })

  let history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    // login(userInput, history)
    auth.signInWithEmailAndPassword(userInput.email, userInput.password)
    .then( auth => {
      if (auth) {
        loginUser(auth)
        history.push('/')
      }
    })
    .catch(error => alert(error.message))
  }


  return (
    <div className="login">
      <Link to="/" >
      <img 
        className="login__logo"
        src="http://pngimg.com/uploads/triangle/triangle_PNG44.png" />
      </Link>
      <div className="login__container">
        <h1 className="signin__title">Sign-in</h1>
        <br></br>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h5>UserName</h5>
            <input value={userInput.name} onChange={(e) => setUserInput({...userInput, name: e.target.value})} type="text" />
            <br></br>
            <h5>Email</h5>
            <input value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})} type="email" />
            <br></br>
            <h5>Password</h5>
            <input value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})}  type="password" />
            <br></br>
            <input className="signin" type="submit" value="SIGN-IN" />
        </form>
        
      </div>
      <br></br>
      <div style={{color: 'red'}}>
      {message}
      </div>
      <Link to="/signup">
        <button className="create__account" value="CREATE AN ACCOUNT">CREATE AN ACCOUNT </button>
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.user.message
  }
}

export default connect(mapStateToProps, {login, loginUser})(Login)
