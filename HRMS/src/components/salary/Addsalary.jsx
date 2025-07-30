import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchdepart, fetchemployees } from "../../utils/EmployeeHelper";

const AddSalary = () => {
  // const { id } = useParams();
  const [salary, setsalary] = useState({
    employeeId: null,
    basicSalary: 0,
    allowances: 0,
    deductions: 0,
    payDate: null,
  });
  const [departments, setDepartments] = useState([]);
  const [employees, setemployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartments = async () => {
      const departmentData = await fetchdepart();
      setDepartments(departmentData);
    };
    getDepartments();
  }, []);

  // useEffect(() => {
  //   const fetchEmployee = async () => {
  //     try {
  //       const response = await axios.get(`https://hrms-backend-6624.onrender.com/employee/${id}`, {
  //         headers: {
  //           "Authorization": `Bearer ${localStorage.getItem("token")}`
  //         }
  //       });

  //       if (response.data.success) {
  //         const emp = response.data.employee;
  //         setEmployee({
  //           name: emp.userId.name || '',
  //           maritalStatus: emp.maritalStatus || '',
  //           designation: emp.designation || '',
  //           salary: emp.salary || 0,
  //           department: emp.department || '',
  //           gender: emp.gender || ''
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching employee:", error);
  //       alert("Failed to load employee");
  //     }
  //   };
  //   fetchEmployee();
  // }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsalary((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(`https://hrms-backend-6624.onrender.com/salary/add`, salary, {
        headers: {
        
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
const handledepartment=async(e)=>{
const emps = await fetchemployees(e.target.value);
setemployees(emps);
}
  return (
    <>
      {departments ? (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Add Salary</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            
              <div >
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="department"
                  onChange={handledepartment}
                 
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

              {/* Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="employeeId"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.employeeId}
                    </option>
                  ))}
                </select>
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700">Basic Salary</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                   placeholder="Basic Salary"type="number"
                  name="basicSalary"
                  onChange={handleChange}
                
                  required
                />
              </div>

             

              {/* Designation */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  name="designation"
                  onChange={handleChange}
                  value={employee.designation}
                  required
                />
              </div> */}

              

              {/* Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Allowances</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" placeholder="Allowances"
                  name="allowances"
                  type="number"
                  onChange={handleChange}
               
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Deductions</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" placeholder="Deductions"
                  name="deductions"
                  type="number"
                  onChange={handleChange}
                
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pay Date</label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md" placeholder="pay date for salary"
                  name="payDate"
                  type="date"
                  onChange={handleChange}
                
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add Employee Salary
            </button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AddSalary;
