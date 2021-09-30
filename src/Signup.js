import React, {useState} from 'react'
import {Link} from "react-router-dom";

import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'
import { auth } from "./firebase"
import {loginUser } from './actions/userAction'


function Signup({createUser, loginUser}) {

  let history = useHistory()
  
  
  const [userInput, setUserInput] = useState({
    name: "", email: "", password: "", password_confirmation: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(userInput.email, userInput.password)
    .then((auth) => {
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
        <h1 style={{color: "white"}} className="signin__title">Create An Account</h1>
        <br></br>
        <form onSubmit={(e) => handleSubmit(e)}>
          
            <h5 style={{color: "white"}}>Email</h5>
            <input value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})} type="email" />
            <br></br>
            <h5 style={{color: "white"}}>Password</h5>
            <input  value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})}  type="password" />
            <br></br>
            
            <input style={{color: "white"}} className="signin" type="submit" value="SIGN-UP" />
        </form>
        
      </div>
      <br></br>
      <ul>
      {/* {message.map((m, idx)=> <li key={idx} style={{color: 'red'}}> {m}</li>)} */}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.user.message
  }
}

export default connect(mapStateToProps, {loginUser})(Signup)
