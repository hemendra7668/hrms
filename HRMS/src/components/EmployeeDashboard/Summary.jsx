import { FaUser,  } from "react-icons/fa";
import { useAuth } from "../../Context/authcontext";

const SummaryCard   = ()=>{
    const {user}= useAuth();
    return (
        <div className="p-5">

    <div className="rounded flex bg-white">
        <div className={`ext-3xl flex justify-center items-center bg-green-400 text-white px-4`}><FaUser/> </div>
        <div className="pl-4 py-1">
            <p className="text-lg font-semibold">Welcome Back</p>
            <p className="text-xl font-bold">{user.name}</p>
        </div>
        </div>
    </div>
   
    )
};
export default SummaryCard;