import { FaBuilding, FaCheckDouble, FaCircleNotch, FaFileAlt, FaHourglassHalf, FaMoneyCheck, FaUser } from "react-icons/fa";
import SummaryCard from "./Summarycard";

const AdminSummary = () =>{
    return (
<div className="p-6"> 
    <h3 className="text-2xl font-bold">DashBoard Overview, Admin</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<FaUser/>} text="total Employee" number ={5} color = "bg-teal-600"/>
        <SummaryCard icon={<FaBuilding/>} text="Total Departments" number ={15} color = "bg-yellow-600"/>
        <SummaryCard icon={<FaMoneyCheck/>} text="Total Salary" number ={4} color = "bg-purple-600"/>
        {/* <SummaryCard icon={<FaUser/>} text="total Employee" number ={5}/> */}
    </div>
    <div className="mt-12">
<h4 className="text-center text-bold text-2xl">Leave Details</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<FaFileAlt/>} text="leave Applied" number ={25} color = "bg-green-600"/>
        <SummaryCard icon={<FaCheckDouble/>} text="Leave Approved" number ={8} color = "bg-yellow-400"/>
        <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number ={6} color = "bg-blue-600"/>
        <SummaryCard icon={<FaCircleNotch/>} text="total Employee" number ={2} color={"bg-orange-600"}/>
    </div>
        
    </div>
</div>
    )
}
export default AdminSummary;