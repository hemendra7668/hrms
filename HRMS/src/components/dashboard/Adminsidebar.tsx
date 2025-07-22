import { NavLink } from "react-router-dom";
import {FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa';
const AdminSidebar= ()=>{

    return(
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 ">
            <div className="bg-teal-500 h-15 flex items-center justify-center">
                <h3 className="text-2xl test-center font-pacific">HR Management System</h3>
            </div>
            <div>
                <NavLink to ='/Admin-dashboard'
   className= {({isActive})=>`${isActive ? "bg-teal-300" : " "} flex items-center space-x-4 block py-2 px-4 rounded`} end>  
                     <FaTachometerAlt/>
                    <span>DashBoard</span>
                </NavLink>
                <NavLink to ='/Admin-dashboard/employees'
   className= {({isActive})=>`${isActive ? "bg-teal-300" : " "} flex items-center space-x-4 block py-2 px-4 rounded`} end>  
                   <FaUser/>
                    <span>Employees</span>
                </NavLink>
                <NavLink to ='/Admin-dashboard/departments'
   className= {({isActive})=>`${isActive ? "bg-teal-300" : " "} flex items-center space-x-4 block py-2 px-4 rounded`}end>                 
       <FaBuilding/>
                    <span>Departments</span>
                </NavLink>
                <NavLink to ='/Admin-dashboard/departments' 
  className= {({isActive})=>`${isActive ? "bg-teal-300" : " "} flex items-center space-x-4 block py-2 px-4 rounded`} end>  
                     <FaCalendarAlt/>
                    <span>leaves</span>
                </NavLink>
                <NavLink to ='/Admin-dashboard/salary/add' 
               className= {({isActive})=>`${isActive ? "bg-teal-300" : ""} flex items-center space-x-4 block py-2 px-4 rounded`} end>  
                    <FaMoneyBillWave/>
                    <span>Salary</span>
                </NavLink>
                <NavLink to ='/Admin-dashboard/departments'
  className= {({isActive})=>`${isActive ? "bg-teal-300" : ""} flex items-center space-x-4 block py-2 px-4 rounded`} end>  
                    <FaCogs/>
                    <span>Settings</span>
                </NavLink>
            </div>
        </div>
    )
}
export default AdminSidebar;