export default function usersReducer(state = {user: null, loggedIn: false},action){
  
  switch(action.type){
    
    case 'LOGIN_SUCCESSFUL': {
      return {
        ...state, 
        user: action.payload,
        loggedIn: true
      }
    }
  
    case 'LOGOUT':
      return{
        ...state, 
        user: null
      }
    default:
      return state
  }
}