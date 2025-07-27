import { useAuth } from "../../Context/authcontext";

const Navbar = ()=>{
    const {user, logout} = useAuth();
    return(
        <div className="flex justify-between items-center text-white h-12 bg-teal-500 px-5 ">
            <p>welcome ,  {user.name}</p>
            {/* <p>welcome</p> */}
            <button className="px-4 py-1 bg-teal-700 hover:bg-teal-800 cursor-pointer"
            onClick={logout}
            >Logout</button>
        </div>
    )
}
export default Navbar;