const url = "http://127.0.0.1:3001/users"

const setUsers = (users) => ({type: "GOT_USERS", payload: users})

const unsuccesuflLogin = (error) => ({type: 'UN_SUCCESSFUL', payload: error})

const unsuccesuflCreate = (error) => ({type: 'UN_SUCCESSFUL_CREATE', payload: error})

export const loginUser = user => ({type: 'LOGIN_SUCCESSFUL', payload: user})

export const logout = user => ({type: 'LOGOUT', payload: user})

export const logoutUser = () => {
  return (dispatch) => { 
    fetch(`http://localhost:3001/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: 'LOGOUT'})
    })
  }
}


export const fetchUsers = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(users => {
      dispatch(setUsers(users))
    })
  }
}

export const createUser = (user, history) => {
  
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: user})
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      
      if (data.status === 500) {
        dispatch(unsuccesuflCreate(data.message))
      }
      else {
      dispatch({
        type: 'AUTH_SUCCESSFUL', payload: {loggedIn: data.logged_in, currentUser: data.user }
      })
      history.push('/')
    }
    })
  }
}

export const login = (user, history) => {
 
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: user})
    }

    fetch("http://127.0.0.1:3001/usersessions", configObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.status === 401){
        dispatch(unsuccesuflLogin(data.message))
      }
      else{
      dispatch({
        type: 'AUTH_SUCCESSFUL', payload: {loggedIn: data.logged_in, currentUser: data.user }
      })
      history.push('/')
    }
    })
    
  }
}
