import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import axios from "axios";
import {EmployeeButton, columns} from "../../utils/EmployeeHelper";

const List =()=>{
const [employees, setemployees]= useState([]);
const [filteredemployees, setfilteredsetemployees]= useState([]);
      useEffect(()=>{
const fetchemployee = async () => {
    try{
const response = await axios.get('http://localhost:3000/employee',{
    headers:{
    "Authorization": `Bearer ${localStorage.getItem('token')}`
}
    })
    console.log(response.data)
     if(response.data.success)
    {
        let sno = 1;
        const data = response.data.employees
//   .filter(dep => dep.dept_name) // filter out bad records
  .map((emp) => ({
    _id: emp._id,
    sno: sno++,
    dept_name: emp.department.dept_name,
    name: emp.userId.name,
    maritalStatus: emp.maritalStatus,
    dob: new Date(emp.dob).toLocaleDateString(),
    profileImage: <img  className="rounded-full" src={`http://localhost:3000/${emp.userId.profileImage}`}/>,
action: (<EmployeeButton _id={emp._id}/>)}));
// console.log(data);

setemployees(data);
setfilteredsetemployees(data)

    }  
}
catch(e)
    {
if(e.response && ! e.response.data.success)
{
    alert(e.response.data.error);
}
    }
}
fetchemployee();
    },[])

const handlefilter = (e) => {
  const value = e.target.value.toLowerCase();
  const record = employees.filter((emp) =>
    emp.name.toLowerCase().includes(value)
  );
  setfilteredsetemployees(record);
};

 console.log(employees);
    return(
        
        <>
      <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Employees</h3></div>
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Search By Dept. Name" id="" onChange={handlefilter} className="px-4 py-0.5  border"/>
                <Link to="/Admin-dashboard/add-employee" className="px-4 py-0.1 bg-teal-500 rounded text-white  ">Add New Employee</Link>
                </div>  
               <div>
               
                
               <DataTable  columns={columns} data={filteredemployees} pagination ></DataTable>
               </div> 
      </div>
        </>
    );
}
export default List;