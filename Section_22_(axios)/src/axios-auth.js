import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

//instance.defaults.headers.common["SOMETHING"] = 'is coming'

export default instance