import axios from "axios";
import decode from "jwt-decode"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use(async(request)=> {
  request.headers.Mushaobs = "martla eshveba"
  const token  = localStorage.getItem("token")
  const refreshToken  = localStorage.getItem("refreshToken")

  if(!token || !refreshToken) return request
 
  //davsetot auth header
  request.headers.Authorization = `Bearer ${token}`

  //tu akvs tokens vada gasuli

  const expirationDate = decode(token).exp
  const isTokenExpired = expirationDate * 1000 < new Date().getTime()

  // tu tokens vada ar gasvlia

  if(!isTokenExpired) return request

  // tu akamde chamovida eseigi vada gauvida

  const {data} = await axios.post("http://localhost:3001/users/refresh", {refresh_token: refreshToken})
  const {token: newAccessToken} = data
  localStorage.setItem("token", newAccessToken)
  request.headers.Authorization = `Bearer ${newAccessToken}`
  return request
})
