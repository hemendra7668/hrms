import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () =>{
    const {id}= useParams();
    const [department, setdepartment]= useState([]);
    const [loading, setloading]= useState(true);
    const navigate = useNavigate();
      useEffect(()=>{
const fetchdepart = async () => {
  setloading(true);
    try{
      console.log(id);
      
const response = await axios.get(`http://localhost:3000/department/${id}`,{
    headers:{
    "Authorization": `Bearer ${localStorage.getItem('token')}`
}
    })
     if(response.data.success)
    {
        setdepartment(response.data.department);
    }  
}
catch(e)
    {
if(e.response && !e.response.data.success)
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

      const handleChange = (e) => {
    const { name, value } = e.target;
    setdepartment({...department, [name]: value});
      }
const handleSubmit =async (e)=>{
  console.log("submit clicked");
  e.preventDefault();
   try {
      const token = localStorage.getItem("token");
    
      const response = await axios.put(`http://localhost:3000/department/${id}`, department, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        console.log(response.data);
        
        navigate("/Admin-dashboard/departments");
      }
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Error adding department");
    }
}
    return(
        <>{loading ?
         <div>loading</div> : 
         <div>
           <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="dept_name">Department Name</label>
          <input
            type="text"
            name="dept_name"
            id="dept_name"
            value={department.dept_name}
            onChange={handleChange}
            placeholder="Enter the Department Name"
            required
            className="mt-1 w-full p-2 border border-gray-400 rounded-md"
            />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={department.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter the description about the department"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white cursor-pointer font-bold py-2 px-4 rounded"
          >
          Edit Department
        </button>
      </form>
    </div>
        </div>
    // <div>
    //  <p> user id : ${id}</p>
    //   </div>
}</>
    );
}

export default EditDepartment;