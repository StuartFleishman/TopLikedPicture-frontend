import React from 'react'
import { connect } from "react-redux"
import {logoutAdmin} from './actions/adminAction'
import { useHistory } from 'react-router-dom'

function AdminHome(props) {
  
  let history = useHistory()
  
  return (
    <div>
      {props.admin ? 
      <>
      <h1>in da Admin Home</h1> 
      <button onClick={() => props.logoutAdmin(history)}>LogOut</button>
      </>
      : <h4>log in dude</h4>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   admin: state.admin.loggedIn
  }
}


export default connect(mapStateToProps, {logoutAdmin})(AdminHome)
