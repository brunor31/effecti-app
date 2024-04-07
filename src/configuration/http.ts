import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: import.meta.env.VITE_VUE_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0'
  }
})

HTTPClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (response) => Promise.reject(response)
)

export { HTTPClient }
