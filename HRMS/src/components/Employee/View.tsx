import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const View = () =>{
    const {id}= useParams();
    const [employee, setemployee]= useState([]);
    const [loading, setloading]= useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchemployee = async () => {
  setloading(true);
  try{
      console.log(id);
      
      const response = await axios.get(`http://localhost:3000/employees/${id}`,{
          headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(response.data.success)
            {
                setemployee(response.data.employees);
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
        <>
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Employee Details</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">  
       <div>
<img src={`http://localhost:3000/${employees.userId.profileImage}`} alt=""  className="rounded-full border w-72"/>
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
<p className="text-lg font-bold">{employee.martialStatus}</p>
</div>
            
       </div>
    </div>
        </div>
</>
    );
}

export default View;
