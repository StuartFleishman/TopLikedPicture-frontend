import React, { useState } from 'react'
import './Admin.css'
import {login} from './actions/adminAction'
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'

function Admin(props) {

  const [userInput, setUserInput] = useState({
    name: "", email: "", password: ""
  })

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(userInput, history)
    setUserInput({name: "", email: "", password: ""})
  }

  return (
    <div className="container" >
      <div className="brand-logo"></div>
      <div className="brand-title">ADMIN</div>
      <div className="inputs">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label><strong>UserName</strong></label>
        <input type="text" value={userInput.name} onChange={(e) => setUserInput({...userInput, name: e.target.value}) } />
        <label><strong>E-mail</strong></label>
        <input type="email" value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})} />
        <label><strong>Password</strong></label>
        <input type="password" value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})} />
        <br></br>
        <br></br>
        <input type="submit" value="Log In" />
      </form>
      </div>
    </div>
  )
}

export default connect(null, {login})(Admin)
