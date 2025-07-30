import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import LeaveButton, { columns } from "../../utils/LeaveHelper";

const AdminLeaveTable = () => {
  const [leaves, setLeaves] = useState([]);
  const [filterLeaves, setfilterLeaves] = useState([]);
 
  const fetchLeaves = async () => {
    try {
      const response = await axios.get("https://hrms-backend-6624.onrender.com/leave", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data.leaves);
      if (response.data.success) {
        let sno = 1;
        const data = response.data.leaves.map((leav) => ({
          _id: leav._id,
          sno: sno++,
          employeeId: leav.employeeId.employeeId,
          name: leav.employeeId.userId.name,
          leaveType: leav.leaveType,
          dept_name: leav.employeeId.department.dept_name,
          status: leav.status,
          days:
          new Date(leav.endDate).getDate() -
          new Date(leav.startDate).getDate(),
          // status: leav.status,
          action: <LeaveButton id={leav._id} />,
        }));
        
        console.log(data);
        setLeaves(data);
        setfilterLeaves(data);
      }
    } catch (e) {
      if (e.response && !e.response.data.success) {
        alert(e.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);
const filterbyInput =(e)=>{
const data = leaves.filter(leave => leave.employeeId.toLowerCase().includes(e.target.value.toLowerCase()));
setfilterLeaves(data);
}
const filterbyButton =(status)=>{
const data = leaves.filter(leave => leave.status.toLowerCase().includes(status.toLowerCase()));
setfilterLeaves(data);
}

  return (
    <>
      {filterLeaves ? (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Leave</h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search by Emp ID"
              className="px-4 py-0.5 border"
              onChange={filterbyInput}
            />
            <div className="space-x-2">
              <button className="px-2 py-1 bg-yellow-400 text-white hover:bg-yellow-600 cursor-pointer rounded"
              onClick={()=>{filterbyButton("Pending")}}>
                Pending
              </button>
              <button className="px-2 py-1 bg-green-400 text-white hover:bg-green-600 cursor-pointer rounded" 
              onClick={()=>{filterbyButton("Approved")}}>
                Approved
              </button>
              <button className="px-2 py-1 bg-red-400 text-white hover:bg-red-600 cursor-pointer rounded" 
              onClick={()=>{filterbyButton("Rejected")}}>
                Rejected
              </button>
            </div>
          </div>
<div className="mt-3">
  
           <DataTable
        columns={columns} data={filterLeaves} pagination highlightOnHover pointerOnHover  persistTableHead  responsive />
</div>
        </div>
      ) : (
        <div>loading ..</div>
      )}
    </>
  );
};
export default AdminLeaveTable;
