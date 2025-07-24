import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authcontext";

 
 const List=()=>{
    const {user}= useAuth();
    const [leaves, setleave]= useState([]);
    let sno=1;

 const fetchleave =async ()=>{
try {
    const response = await axios.get(`http://localhost:3000/leave/${user._id}`,{
        headers: {
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    });
   
    if(response.data.success)
    {
setleave(response.data.leaves);
// setfilteredsalary(response.data.salary);
    }
} catch (error) {
    if(error.response && !error.response.data.success )
    {
        alert(error.message);
    }
}
 };
 useEffect(()=>{
fetchleave();
 },[])
    return(
        <>
        <div className="p-6">
            <div className="text-center">
                <h3 className="text-2xl font-bold">Manage Leave</h3>
            </div>
            <div className="flex justify-between items-center">
                <input type="text"  placeholder="Search by dep name" className="px-4 py-0.5 border" />
                <Link to="/Employee-dashboard/add-leave" className="px-4 py-1 bg-blue-400 rounded text-white">Apply for Leave </Link>
            </div>


             <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-60 uppercase bg-gray-50 border border-gray-200">
        <tr>
            <th className="px-6 py-3">S No.</th>
            <th className="px-6 py-3">LEAVE TYPE</th>
            <th className="px-6 py-3">FROM</th>
            <th className="px-6 py-3">TO</th>
            <th className="px-6 py-3">DESCRIPTION</th>
            <th className="px-6 py-3">APPLIED DATE</th>
            <th className="px-6 py-3">STATUS</th>
            </tr> 
            </thead>
            <tbody>
                {leaves.map((lv)=>(
                    <tr key={lv._id}
                    className="bg-white border-b dark: bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-3">{sno++}</td>
                        <td className="px-6 py-3">{lv.leaveType}</td>
                        <td className="px-6 py-3">{new Date(lv.startDate).toLocaleDateString()}</td>
                        <td className="px-6 py-3">{new Date(lv.endDate).toLocaleDateString()}</td>
                        <td className="px-6 py-3">{lv.Reason}</td>
                        <td className="px-6 py-3">{new Date(lv.endDate).toLocaleDateString()}</td>
                        <td className="px-6 py-3">{lv.status}</td>
                    </tr>
                ))}
            </tbody>
   </table>
        </div>
        </>
    );
 }
 export default List;