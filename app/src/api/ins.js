import axios from 'axios'
import config from './conf.json'

export default axios.create({
  baseURL: config.baseURL
})
