export default function authReducer(state = {loggedIn: false, currentUser: {}, error: false, message: []},action){
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