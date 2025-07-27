import { useNavigate } from "react-router-dom";
import axios from "axios";
export const columns = [
  {
    name: "s.no",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dept_name,
    // sortable: true
  },
  {
    name: "Action Name",
    selector: (row) => row.action,
  },
];

export const DepartmentButton = ({_id, onDepartmentDelete})=>{
  const navigate =useNavigate();
  
  const handledelete=async(id)=>{
    const cofirm=window.confirm("do u want to delete")
    if(confirm)
    {

      try{
        console.log(id);
        
        const response = await axios.delete(`http://localhost:3000/department/${id}`,{
          headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success)
          {
            // setdepartment(response.data.department);
            onDepartmentDelete(id);
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
   
}

  return (
    <div className="flex space-x-3">
      <button className=" rounded px-3 py-1 bg-teal-600 text-white cursor-pointer" onClick={()=>
        navigate(`/Admin-dashboard/department/${_id}`)}>Edit</button>
      <button className=" rounded px-3 py-1 bg-red-500 text-white cursor-pointer"
      onClick={()=>handledelete(_id)}
      >Delete</button>
      
    </div>
  )
}