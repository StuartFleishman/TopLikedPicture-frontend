import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:5001/store-app-2aa0a/us-central1/api'
})

export default instance