import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchdepart } from "../../utils/EmployeeHelper";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    maritalStatus: '',
    designation: '',
    salary: 0,
    department: '',
    gender: '',
  });
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartments = async () => {
      const departmentData = await fetchdepart();
      setDepartments(departmentData);
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/employee/${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (response.data.success) {
          const emp = response.data.employee;
          setEmployee({
            name: emp.userId.name || '',
            maritalStatus: emp.maritalStatus || '',
            designation: emp.designation || '',
            salary: emp.salary || 0,
            department: emp.department || '',
            gender: emp.gender || ''
          });
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
        alert("Failed to load employee");
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(`http://localhost:3000/employee/${id}`, employee, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        navigate("/Admin-dashboard/employees");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to update employee");
    }
  };

  return (
    <>
      {departments.length && employee ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="name"
                  onChange={handleChange}
                  value={employee.name}
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="gender"
                  onChange={handleChange}
                  value={employee.gender}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                <select
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="maritalStatus"
                  onChange={handleChange}
                  value={employee.maritalStatus}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="designation"
                  onChange={handleChange}
                  value={employee.designation}
                  required
                />
              </div>

              {/* Department */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="department"
                  onChange={handleChange}
                  value={employee.department}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dep) => (
                    <option key={dep._id} value={dep._id}>
                      {dep.dept_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="salary"
                  type="number"
                  onChange={handleChange}
                  value={employee.salary}
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Edit Employee
            </button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default EditEmployee;
