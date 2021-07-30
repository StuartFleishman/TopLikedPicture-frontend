


const unsuccesuflLogin = (error) => ({type: 'UN_SUCCESSFUL', payload: error})

export const login = (admin, history) => {
  
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({admin: admin})
    }

    fetch("http://127.0.0.1:3001/sessions", configObj)
    .then(resp => resp.json())
    .then(data => {
      
      if (data.status === 401){
        dispatch(unsuccesuflLogin(data.message))
      }
      else{
      dispatch({
        type: 'AUTH_SUCCESSFUL', payload: {loggedIn: data.logged_in, currentUser: data.admin }
      })
      history.push('/admin/home')
    }
    })
    
  }
}
