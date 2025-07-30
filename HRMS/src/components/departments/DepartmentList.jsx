import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { columns, DepartmentButton } from "../../utils/DepartmentHelper";
const DepartmentList = () =>{
    const [departments, setdepartment]= useState([]);
    const [loading, setloading]= useState(false);
    const[ filteredDepartment, setfilteredDepartment]= useState([]);
    const onDepartmentDelete = async(id)=>{
const data = await departments.filter(dept=>dept._id !== id)
setdepartment(data);
    }
    useEffect(()=>{
const fetchdepart = async () => {
    try{
const response = await axios.get('https://hrms-backend-6624.onrender.com/department',{
    headers:{
    "Authorization": `Bearer ${localStorage.getItem('token')}`
}
    })
     if(response.data.success)
    {
        let sno = 1;
        const data = response.data.departments
  .filter(dep => dep.dept_name) // filter out bad records
  .map((dep) => ({
    _id: dep._id,
    sno: sno++,
    dept_name: dep.dept_name,
    action: (<DepartmentButton _id={dep._id} onDepartmentDelete={onDepartmentDelete} />)
}));

setdepartment(data);
setfilteredDepartment(data);
    }  
}
catch(e)
    {
if(e.response && ! e.response.data.success)
{
    alert(e.response.data.error);
}
    }
    finally{
      setloading(false)  
    }
}
fetchdepart();
    },[])

   const filterDept = (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const records = departments.filter((dep) =>
    dep.dept_name.toLowerCase().includes(searchTerm)
  );

  setfilteredDepartment(records);
};


    return (
        <> {loading? <div>loading...</div>: 
       <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Departments</h3></div>
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Search By Dept. Name" id=""  className="px-4 py-0.5  border" onChange={filterDept}/>
                <Link to="/Admin-dashboard/add-department" className="px-4 py-0.1 bg-teal-500 rounded text-white  ">Add New Department</Link>
                </div>  
                <div>
<DataTable columns={columns}  data={filteredDepartment} pagination/>
                </div>
        </div>
}</>
    );
}
export default DepartmentList;