import { useState } from "react";
import { useAuth } from "../../Context/authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLeave=()=>{
    const {user} = useAuth();
    const navigate= useNavigate();
    const [leave, setleave] = useState({
userId:user._id,

    });

    const handlechange =(e)=>{
       const{ name , value }= e.target;
       setleave((prev)=>({...prev, [name]:value}))
    };

 const handleSubmit = async(e)=>{
       e.preventDefault();
      
         try{
    
     
      const response = await axios.post(`http://localhost:3000/leave/add`,leave,{
          headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log("the response here is now here",response.data)
        if(response.data.success)
            {
               navigate(`/Employee-dashboard/leaves/${user._id}`)
            }  
        }
        catch(e)
        {
            console.log(e)
            if(e.response && !e.response.data.success)
                {
                    alert(e.response.data.error);
                }
            }
    //    setleave((prev)=>({...prev, [name]:value}))
    };
    return (
        <>
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Request for leave</h2>
            <form onSubmit= {handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="">Leave Type</label>
                        <select className="mt-1 p-2 block w-full border-gray-200 rounded-md" name="leaveType" id="" onChange={handlechange}  required >
<option value="">Select Leave Type</option>
<option value="Sick Leave">Sick Leave </option>
<option value="Casual Leave">Casual Leave </option>
<option value="Annual Leave">Annual Leave </option>
                        </select>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
    <label htmlFor=""  className="block text-sm font-medium text-gray-700">From Date</label>
    <input type="date" name="startDate" onChange={handlechange} className="mt-1 p-2 block w-full border border-gray-200 rounded-md" required />
</div>
<div>
    <label htmlFor=""  className="block text-sm font-medium text-gray-700">From Date</label>
    <input type="date" name="endDate" onChange={handlechange} className="mt-1 p-2 block w-full border border-gray-200 rounded-md" required />
</div>
</div>
<div>
    <label htmlFor="" className="block text-sm font-medium text-gray-700"> Description</label>
    <textarea name="Reason" className="w-full border border-gray-200 " placeholder="please describe your reason for Leave "  onChange={handlechange}></textarea>
</div>

                   
                    <button type="submit" className="w-full mt-6 bg-blue-400 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded">Apply</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default AddLeave;