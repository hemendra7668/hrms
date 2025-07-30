import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const View = () =>{
    const {id}= useParams();
    const [employee, setemployee]= useState(null);
   
    useEffect(()=>{
        const fetchemployee = async () => {

  try{
      console.log(id);
      
      const response = await axios.get(`https://hrms-backend-6624.onrender.com/employee/${id}`,{
          headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)
        if(response.data.success)
            {
                setemployee(response.data.employee);
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
        fetchemployee();
    },[])
    

    return(
        <>{employee ? (

            <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Employee Details</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">  
       <div>
<img src={`https://hrms-backend-6624.onrender.com/${employee.userId.profileImage}`} alt=""  className="rounded-full border w-72"/>
       </div>
       <div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">name:</p>
<p className="text-lg font-bold">{employee.userId.name}</p>
</div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">Employee Id:</p>
<p className="text-lg font-bold">{employee.employeeId}</p>
</div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">DOB:</p>
<p className="text-lg font-bold">{employee.dob}</p>
</div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">gender:</p>
<p className="text-lg font-bold">{employee.gender}</p>
</div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">Department:</p>
<p className="text-lg font-bold">{employee.department.dept_name}</p>
</div>
<div className="flex space-x-3 mb-5">
<p className="text-lg font-bold">Martial Status:</p>
<p className="text-lg font-bold">{employee.maritalStatus}</p>
</div>
            
       </div>
    </div>
        </div>
):<div> loading ..</div>}  </>
    );
}

export default View;
