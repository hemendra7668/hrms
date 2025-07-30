import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/authcontext";
const ViewSalary =()=>{
    const [salaries, setsalaries] = useState(null);
    const [filteredsalary, setfilteredsalary] = useState(null);
    const {id} = useParams();
    let sno=1;
const {user}= useAuth();
 const fetchsalary =async ()=>{
try {
    const response = await axios.get(`https://hrms-backend-6624.onrender.com/salary/${id}/${user.role}`,{
        headers: {
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    });
    console.log(response.data);
    if(response.data.success)
    {
setsalaries(response.data.salary);
console.log(response.data);

setfilteredsalary(response.data.salary);
    }
} catch (error) {
    if(error.response && !error.response.data.success )
    {
        alert(error.message);
    }
}
 };
 useEffect(()=>{
fetchsalary();
 },[])

const filteredsalaries = (e) => {
  const q = e.target.value;
  const filtered = salaries.filter(sal =>
    sal.employeeId.employeeId.toLowerCase().includes(q.toLowerCase())
  );
  setfilteredsalary(filtered);
};


return(
    <>
    {filteredsalary === null ? (
        <div>loading.....</div>
    ):(
<div className="overflow-x-auto p-5">
    <div className="text-center">
        <h2 className="text-2xl font-bold">Salary History</h2>
    </div>
    <div className="flex justify-end my-3">
<input type="text"
placeholder="Search By Emp id"
 className="border px-2 rounded-md py-0.5 border-gray-200" onChange={filteredsalaries} />
    </div>
{filteredsalary.length > 0 ? (
   <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-60 uppercase bg-gray-50 border border-gray-200">
        <tr>
            <th className="px-6 py-3">S No.</th>
            <th className="px-6 py-3">Emp ID</th>
            <th className="px-6 py-3">Salary</th>
            <th className="px-6 py-3">Allowance</th>
            <th className="px-6 py-3">Deductions</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">payDate</th>
            </tr> 
            </thead>
            <tbody>
                {filteredsalary.map((salary)=>(
                    <tr key={salary.id}
                    className="bg-white border-b dark: bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-3">{sno++}</td>
                        <td className="px-6 py-3">{salary.employeeId.employeeId}</td>
                        <td className="px-6 py-3">{salary.basicSalary}</td>
                        <td className="px-6 py-3">{salary.allowances}</td>
                        <td className="px-6 py-3">{salary.deductions}</td>
                        <td className="px-6 py-3">{salary.netSalary}</td>
                        <td className="px-6 py-3">{new Date(salary.payDate).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
   </table> ) :<div>no records</div>}
   
   </div>
)}

 </>)};
export default ViewSalary;