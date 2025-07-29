import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import axios from "axios";
import { EmployeeButton, columns } from "../../utils/EmployeeHelper";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          let sno = 1;

          const data = response.data.employees
            .filter((emp) => emp.userId && emp.department) // <- Filter null department or userId
            .map((emp) => ({
              _id: emp._id,
              sno: sno++,
              dept_name: emp.department.dept_name,
              name: emp.userId.name,
              maritalStatus: emp.maritalStatus,
              dob: new Date(emp.dob).toLocaleDateString(),
              profileImage: (
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src={`http://localhost:3000/${emp.userId.profileImage}`}
                  alt="profile"
                />
              ),
              action: <EmployeeButton _id={emp._id} />,
            }));

          setEmployees(data);
          setFilteredEmployees(data);
        }
      } catch (e) {
        if (e.response && !e.response.data.success) {
          alert(e.response.data.error);
        } else {
          console.error("Error fetching employees:", e.message);
        }
      }
    };

    fetchEmployee();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const record = employees.filter((emp) =>
      emp.name.toLowerCase().includes(value)
    );
    setFilteredEmployees(record);
  };

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>

      <div className="flex justify-between items-center my-4">
        <input
          type="text"
          placeholder="Search By Name"
          onChange={handleFilter}
          className="px-4 py-1 border rounded"
        />
        <Link
          to="/Admin-dashboard/add-employee"
          className="px-4 py-1 bg-teal-500 rounded text-white"
        >
          Add New Employee
        </Link>
      </div>

      <DataTable columns={columns} data={filteredEmployees} pagination />
    </div>
  );
};

export default List;
