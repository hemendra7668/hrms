import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
    width: '70px'
  },
  {
    name: "Employee Name",
    selector: (row) => row.name,
    sortable: true,
    width: '150px'
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: '140px'
  },
  {
    name: "Department Name",
    selector: (row) => row.dept_name,
    width: "180px"
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    width:"150px"
  },
  {
    name: "Action",
    cell: (row) => row.action,
    center: true
  },
];



export const fetchdepart = async () => {
 let departments;
   try{
const response = await axios.get('http://localhost:3000/department',{
   headers:{
   "Authorization": `Bearer ${localStorage.getItem('token')}`
}
   })
    if(response.data.success)
   {
 departments= response.data.departments
   }  
}
catch(e)
   {
if(e.response && ! e.response.data.success)
{
   alert(e.response.data.error);
}
   }
return departments
}


export const fetchemployees = async (id) => {
 let employees;
   try{
const response = await axios.get(`http://localhost:3000/employee/department/${id}`,{
   headers:{
   "Authorization": `Bearer ${localStorage.getItem('token')}`
}
   })
    if(response.data.success)
   {
 employees= response.data.employees
   }  
}
catch(e)
   {
if(e.response && ! e.response.data.success)
{
   alert(e.response.data.error);
}
   }
return employees
}

export const EmployeeButton = ({_id})=>{
  const navigate =useNavigate();
  
  // const handledelete=async(id)=>{
  //   const cofirm=window.confirm("do u want to delete")
  //   if(confirm)
  //   {

  //     try{
  //       console.log(id);
        
  //       const response = await axios.delete(`http://localhost:3000/department/${id}`,{
  //         headers:{
  //           "Authorization": `Bearer ${localStorage.getItem('token')}`
  //         }
  //       })
  //       if(response.data.success)
  //         {
  //           // setdepartment(response.data.department);
  //           onDepartmentDelete(id);
  //         }  
  //       }
  //       catch(e)
  //       {
  //         if(e.response && !e.response.data.success)
  //           {
  //             alert(e.response.data.error);
  //           }
  //         }
  //       }
   
// }

 
  return (
    <div className="flex space-x-3">
      <button className="px-3 py-1 bg-teal-600 text-white" onClick={()=>
        navigate(`/Admin-dashboard/employees/${_id}`)}>View</button>
      <button className="px-3 py-1 bg-orange-400 text-white" 
      onClick={()=> navigate(`/Admin-dashboard/employees/edit/${_id}`)}>Edit</button>
      <button className="px-3 py-1 bg-green-600 text-white" onClick={()=>
        navigate(`/Admin-dashboard/department/${_id}`)}>Salary</button>
      <button className="px-3 py-1 bg-red-500 text-white"
      onClick={()=>{}} >Leave</button>
      
    </div>
  )
}

