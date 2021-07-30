import React from 'react'
import { connect } from "react-redux"

function AdminHome(props) {
  return (
    <div>
      {props.admin ? <h1>in da Admin Home</h1> : <h4>log in dude</h4>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   admin: state.admin.loggedIn
  }
}


export default connect(mapStateToProps)(AdminHome)
