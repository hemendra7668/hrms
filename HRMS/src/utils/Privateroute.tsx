import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext";

const PrivateRoute =({children})=>{
    const {user, loading}= useAuth();
if(loading)
{
    return <div>loading ... ... ...</div>
}

return user?children: <Navigate to ="/login"/>;
};
export default PrivateRoute;