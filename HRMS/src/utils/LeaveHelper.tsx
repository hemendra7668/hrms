import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
    width:"90px"
  },
  {
    name: "Employee ID",
    selector: (row) => row.employeeId,
  width:"120px"
  },
  {
    name: "Name",
    selector: (row) => row.name,
    width:"120px"
  },
  {
    name: "Leave Type",
    selector: (row) => row.leaveType,
    width:"140px"
  },
  {
    name: "Department",
    selector: (row) => row.dept_name,
    width:"180px"
  },
  {
    name: "Status",
    selector: (row) => row.status,
    width:"120px"
  },
  {
    name: "Days",
    selector: (row) => row.days,
  width:"80px"
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center:true
  }
];

const LeaveButton =({id})=>{
    const navigate = useNavigate();

    const handleview = (id)=>{
navigate(`/Admin-dashboard/leaves/${id}`);
    };
    return (
        <>
        <button className="px-4 py-1 bg-teal-400 rounded text-white hover: bg-teal-600 cursor-pointer"
        onClick={()=>handleview(id)}
        >
            view
        </button>
        </>
    );
}
export default LeaveButton;