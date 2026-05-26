import { Navigate } from "react-router-dom";

const PublicRoute=({children})=>{
    
    const isLoggedIn=localStorage.getItem('loggedIn')
    return isLoggedIn?<Navigate to='/dashboard'/>:children
}
export default PublicRoute