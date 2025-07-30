import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LeaveDetail =()=>{
 const {id}= useParams();

 const navigate = useNavigate();
    const [leaves, setleaves]= useState(null);
   
    useEffect(()=>{
        const fetchleave = async () => {

     try{
      console.log(id);
      
      const response = await axios.get(`https://hrms-backend-6624.onrender.com/leave/detail/${id}`,{
          headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)
        if(response.data.success)
            {
                setleaves(response.data.leave);
            }  
        }
          catch( e)
        {
            if(e.response && !e.response.data.success)
                {
                    alert(e.response.data.error);
                }
            }
          
        }
        fetchleave()
    },[])
    


    const  changeStatus = async(id, status)=> {
      try{
      console.log(id);
      
      const responnse = await axios.put(`https://hrms-backend-6624.onrender.com/leave/${id}`, 
         {status},
        {
          headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(responnse.data)
        if(responnse.data.success)
            {
               navigate("/Admin-dashboard/leaves")
            }  
        }
        catch(e)
        {
            if(e.response && !e.response.data.success)
                {
                    alert(e.response.data.error);
                } 
        }
    }

    return(
        <>{leaves ? (

            <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Leave Details</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">  
       <div>
<img  src={`https://hrms-backend-6624.onrender.com/${leaves.employeeId.userId.profileImage}`}  className="rounded-full border w-72"/>
       </div>
       <div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">name:</p>
<p className="text-lg font-bold">{leaves.employeeId.userId.name}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Employee Id:</p>
<p className="text-lg font-bold">{leaves.employeeId.employeeId}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Leave Type:</p>
<p className="text-lg font-bold">{leaves.leaveType}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">DOB:</p>
<p className="text-lg font-bold">{new Date(leaves.employeeId.dob).toLocaleDateString()}</p>
</div>
{/* <div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">gender:</p>
<p className="text-lg font-bold">{leaves.employeeId.gender}</p>
</div> */}
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Department:</p>
<p className="text-lg font-bold">{leaves.employeeId.department.dept_name}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Martial Status:</p>
<p className="text-lg font-bold">{leaves.employeeId.maritalStatus}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Reason:</p>
<p className="text-lg font-bold">{leaves.Reason}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">Start Date:</p>
<p className="text-lg font-bold">{new Date(leaves.startDate).toLocaleDateString()}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">End Date:</p>
<p className="text-lg font-bold">{new Date(leaves.endDate).toLocaleDateString()}</p>
</div>
<div className="flex space-x-3 mb-2">
<p className="text-lg font-bold">
   {leaves.status==="Pending" ? "Action" :"Status"}
    </p>
    { leaves.status === "Pending" ? (

        <div className="flex space-x-2">
<button className="  px-2 py-0.5 bg-green-400 hover:bg-green-600 cursor-pointer " onClick={()=>{changeStatus(leaves._id, "Approved")}}>Approve</button>
<button className="px-2 py-0.5  bg-red-400 hover:bg-red-600 cursor-pointer" onClick={()=>{changeStatus(leaves._id, "Rejected")}}>Reject</button>

    </div>
        ):
<p className="text-lg font-bold">{leaves.status}</p>
}
</div>
            
       </div>
    </div>
        </div>
):<div> loading ..</div>}  </>
    );
};
export default LeaveDetail;