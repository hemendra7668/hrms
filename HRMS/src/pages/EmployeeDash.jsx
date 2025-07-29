import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/navbar.jsx";
import EmployeeSidebar from "../components/EmployeeDashboard/EmployeeSidebar.jsx";
import { useAuth } from "../Context/authcontext.jsx";
// import SummaryCard from "../components/EmployeeDashboard/Summary.jsx";

const EmployeeDash = () => {
  useAuth();

  return (
    <>
      <div className="flex">
        <EmployeeSidebar />
        <div className="flex-1 ml-64 bg-gray-100 h-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default EmployeeDash;
