export default function userReducer(state = {loggedIn: false, currentUser: {}, error: false, message: []},action){
  switch(action.type){
    case 'AUTH_SUCCESSFUL':
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        currentUser: action.payload.currentUser,
      }
    case 'UN_SUCCESSFUL': 
      return {
        ...state, 
        message: action.payload
      }

    case 'UN_SUCCESSFUL_CREATE': {
      return {
        ...state, 
        message: action.payload
      }
    }

    case 'LOGIN_SUCCESSFUL': {
      return {
        ...state, 
        currentUser: action.payload
      }
    }
  
    case 'LOGOUT':
      return{
        ...state, 
        loggedIn: false, 
        currentUser: {},
      }
    default:
      return state
  }
}