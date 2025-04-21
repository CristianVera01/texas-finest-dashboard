import axios from 'axios'

export const texasFinestApi = axios.create({
  baseURL: 'http://192.168.0.31:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
