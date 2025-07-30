import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchdepart } from "../../utils/EmployeeHelper";

const Add = () => {
const [department, setdepartment]= useState([]);
const navigate= useNavigate();
    useEffect(()=>{
        const getdeprt = async()=>{
            const department = await fetchdepart();
            setdepartment(department);
        };
        getdeprt();
        
    },[])
  const [formData, setFormData] = useState({ });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === "profileImage")
    {

        setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
    else{
        setFormData((prev) => ({ ...prev, [name]: value}));

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key)=>{
        formDataObj.append(key,formData[key])
      })
    
      const token = localStorage.getItem("token");

      const response = await axios.post("https://hrms-backend-6624.onrender.com/employee/add", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
if(response.data.success){
navigate('/Admin-dashboard/employees')
 
}
      
    } catch (err) {
      console.error(err);
     
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div >
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="name"  onChange={handleChange} placeholder="Insert Name" required />
          </div>
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" type="email"  onChange={handleChange} placeholder="Insert Email" required />
          </div>
       

        {/* Row 2: Employee ID & DOB */}
       
          <div >
            <label className="block text-sm font-medium text-gray-700"  >Employee ID</label>
            <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="employeeId"  onChange={handleChange} placeholder="Employee ID" required />
          </div>
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="dob"  type="date"  onChange={handleChange} required />
          </div>
       

        {/* Row 3: Gender & Marital Status */}
       
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="gender"  onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="maritalStatus"  onChange={handleChange} required>
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
       

        {/* Row 4: Designation & Department */}
       
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="designation"  onChange={handleChange} placeholder="Designation" required />
          </div>
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="department"  onChange={handleChange} required>
              <option value="">Select Department</option>
             {department.map(dep=>(
                <option key={dep._id} value={dep._id}>{dep.dept_name}</option>
             ))}
            </select>
          </div>
       

        {/* Row 5: Salary & Password */}
      
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="salary" type="number"  onChange={handleChange} placeholder="Salary" required />
          </div>
          <div >
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="password" type="password"  onChange={handleChange} placeholder="******" required />
          </div>
        </div>

        {/* Row 6: Role & Upload Image */}
      
          <div >
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" name="role"  onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" type="file" name="profileImage" onChange={handleChange} />
          </div>
      

        <button type="submit" style={{ marginTop: 20, width: "100%", padding: 10, background: "#007BFF", color: "#fff", border: "none", borderRadius: 4 }}>
          Add Employee
        </button>
      </form>

    
    </div>
  );
};

export default Add;
