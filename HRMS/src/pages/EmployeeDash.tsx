
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext.tsx";
import Navbar from "../components/dashboard/navbar.tsx";
import EmployeeSidebar from "../components/EmployeeDashboard/EmployeeSidebar.tsx";
// import SummaryCard from "../components/EmployeeDashboard/Summary.tsx";

const EmployeeDash = () => {
  useAuth();
  const navigate = useNavigate();
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
