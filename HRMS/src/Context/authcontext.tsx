import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const usercontext = createContext();
const AuthContext = ({children})=>{
    const [user, setUser] = useState(null);
const [loading, setloading]= useState(true);
    useEffect(()=>{
        const verifyuser =async()=>{
try{
    const token = localStorage.getItem('token');
if(token){

    const response = await axios.get('http://localhost:3000/auth/verify',{
        
        headers:{
            "Authorization" :`Bearer ${token}`
        }
    })
    
    if(response.data.success)
        {
            setUser(response.data.user);  
        }
    }
    else{
        setUser(null)
        setloading(false)
    }
}
catch(err)
{
   
console.log(err);
if(err.response && err.response.data && err.response.data.error){
setUser(null);
}

}
finally{
setloading(false);
}
        }

         verifyuser();
    },[])
    const login =(user)=>{
setUser(user);
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("token");

    };
return(
    <>
<usercontext.Provider value={{user, login, logout, loading}}>
    {children}
</usercontext.Provider>
    </>
);
};
export const useAuth = ()=> useContext(usercontext);
  
export default AuthContext;