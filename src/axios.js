import axios from "axios"

const instance = axios.create({
  baseURL: 'https://us-central1-store-app-2aa0a.cloudfunctions.net/api'
  
})

export default instance


// https://us-central1-store-app-2aa0a.cloudfunctions.net/api 
// 'http://localhost:5001/store-app-2aa0a/us-central1/api'