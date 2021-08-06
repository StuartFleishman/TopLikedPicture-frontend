import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {createUser } from './actions/userAction'
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'

function Signup({createUser, message}) {

  let history = useHistory()
  
  
  const [userInput, setUserInput] = useState({
    name: "", email: "", password: "", password_confirmation: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    createUser(userInput, history)
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
        <h1 className="signin__title">Create An Account</h1>
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
            <h5>Password Confirmation</h5>
            <input value={userInput.password_confirmation} onChange={(e) => setUserInput({...userInput, password_confirmation: e.target.value})}  type="password" />
            <input className="signin" type="submit" value="SIGN-UP" />
        </form>
        
      </div>
      <br></br>
      <ul>
      {message.map((m, idx)=> <li key={idx} style={{color: 'red'}}> {m}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.user.message
  }
}

export default connect(mapStateToProps, {createUser})(Signup)
