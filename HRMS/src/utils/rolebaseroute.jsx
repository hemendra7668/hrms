
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext";
const RolebasedRoute = ({children, requiredrole} )=>{
    const {user, loading}= useAuth();
    if(loading)
    {
       return <div>loading .. . . . . . .</div>
    }
    if(!requiredrole.includes(user.role))
    {
       return <Navigate to= '/unauthorised'/>
    }
   
    return user? children : <Navigate to="/login"/>
   
}
export default RolebasedRoute;