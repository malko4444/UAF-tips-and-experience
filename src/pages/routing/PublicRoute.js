import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { store } from "../../store/store"
export default function PublicRoute({children}) {
    const user = useSelector((store)=> store.authSlice.user)
  return user? <Navigate to={"/"}/>:children  
    
      
    
 
}
