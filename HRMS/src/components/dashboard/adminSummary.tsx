import {
  FaBuilding,
  FaCandyCane,
  FaCheckDouble,
  FaFileAlt,
  FaHourglassHalf,
  FaMoneyCheck,
  FaUser,
} from "react-icons/fa";
import SummaryCard from "./Summarycard";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminSummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchsummary = async () => {
      try {
        const summary = await axios.get("http://localhost:3000/dashboard/summary", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setSummary(summary.data);
      } catch (error) {
        console.log(error);
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchsummary();
  }, []);

  if (!summary) {
    return <div className="p-6 text-lg font-semibold text-gray-700">Loading ...</div>;
  }

  return (
    <div className="p-6 bg-[#F8FAFC] min-h-screen">
      <h3 className="text-3xl font-bold text-gray-800">Dashboard Overview, Admin</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <SummaryCard icon={<FaUser />} text="Total Employees" number={summary.total_emp} color="bg-[#0ea5e9]" />
        <SummaryCard icon={<FaBuilding />} text="Departments" number={summary.total_dept} color="bg-[#6366f1]" />
        <SummaryCard icon={<FaMoneyCheck />} text="Total Salary" number={summary.totalsalary} color="bg-[#22c55e]" />
      </div>

      <div className="mt-12">
        <h4 className="text-center font-semibold text-2xl text-gray-700 mb-6">Leave Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard icon={<FaFileAlt />} text="Leave Applied" number={summary.leavesummary.appliedfor} color="bg-[#3b82f6]" />
          <SummaryCard icon={<FaCheckDouble />} text="Leave Approved" number={summary.leavesummary.approved} color="bg-[#14b8a6]" />
          <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={summary.leavesummary.pending} color="bg-[#f59e0b]" />
          <SummaryCard icon={<FaCandyCane />} text="Rejected" number={summary.leavesummary.rejected} color="bg-[#ef4444]" />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
