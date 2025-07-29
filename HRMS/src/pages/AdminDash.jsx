import AdminSidebar from "../components/dashboard/Adminsidebar.jsx";
// import AdminSummary from "../components/dashboard/adminSummary";
import Navbar from "../components/dashboard/navbar.jsx";
import { useAuth } from "../Context/authcontext.jsx";

import { Outlet } from "react-router-dom";
const AdminDash = () => {
  const { user, loading } = useAuth();
  // const navigate = useNavigate();

  // console.log("de", user);
  // console.log("de", user.name);
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDash;
