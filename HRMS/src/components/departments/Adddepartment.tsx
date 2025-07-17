import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const navigate = useNavigate();

  const [dept, setDept] = useState({
    dept_name: "",
    description: ""
  });

  // ✅ Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDept(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:3000/department/add", dept, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        navigate("/admin-dash/departments");
      }
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Error adding department");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="dept_name">Department Name</label>
          <input
            type="text"
            name="dept_name"
            id="dept_name"
            value={dept.dept_name}
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
            value={dept.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter the description about the department"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;
