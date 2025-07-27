import { FaBuilding, FaCandyCane, FaCheckDouble, FaCircleNotch, FaFileAlt, FaHourglassHalf, FaMoneyCheck, FaUser } from "react-icons/fa";
import SummaryCard from "./Summarycard";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminSummary = () =>{
const [summary, setSummary]=useState(null);
useEffect(()=>{
const fetchsummary = async()=>{
    try {
        
        const summary = await axios.get('http://localhost:3000/dashboard/summary',{
    headers:{
    "Authorization": `Bearer ${localStorage.getItem('token')}`
}
    })
    setSummary(summary.data);
    } catch (error) {
        console.log(error);
         if(error.response && !error.response.data.success)
                {
                    alert(error.response.data.error);
                }          
    }
}

fetchsummary();
},[])
if(!summary)
{
    return(<div>loading .....</div>)
}

    return (
<div className="p-6"> 
    <h3 className="text-2xl font-bold">DashBoard Overview, Admin</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<FaUser/>} text="total Employee" number ={summary.total_emp} color = "bg-teal-600"/>
        <SummaryCard icon={<FaBuilding/>} text="Total Departments" number ={summary.total_dept} color = "bg-yellow-600"/>
        <SummaryCard icon={<FaMoneyCheck/>} text="Total Salary" number ={summary.totalsalary} color = "bg-purple-600"/>
        {/* <SummaryCard icon={<FaUser/>} text="total Employee" number ={5}/> */}
    </div>
    <div className="mt-12">
<h4 className="text-center text-bold text-2xl">Leave Details</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<FaFileAlt/>} text="leave Applied" number ={summary.leavesummary.appliedfor} color = "bg-green-600"/>
        <SummaryCard icon={<FaCheckDouble/>} text="Leave Approved" number ={summary.leavesummary.approved} color = "bg-yellow-400"/>
        <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number ={summary.leavesummary.pending} color = "bg-blue-600"/>
        <SummaryCard icon={<FaCandyCane/>} text="total Rejected" number ={summary.leavesummary.rejected} color={"bg-orange-600"}/>
    </div>
        
    </div>
</div>
    )
}
export default AdminSummary;