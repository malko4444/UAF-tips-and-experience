import {Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
export default function PrivateRoute({children}) {
    const user = useSelector((store)=> store.authSlice.user)
  return user? children: <Navigate to={"/login"}/> 
    
      
    
 
}