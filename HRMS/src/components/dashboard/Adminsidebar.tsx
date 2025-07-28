import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-[#1E293B] text-[#E2E8F0] h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-violet-500 h-16 flex items-center justify-center">
        <h3 className="text-2xl text-center font-semibold">HR Management</h3>
      </div>

      {/* Nav Links */}
      <div className="pt-2">
        <NavLink
          to="/Admin-dashboard"
           className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/Admin-dashboard/employees"
           className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaUser />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/Admin-dashboard/departments"
           className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/Admin-dashboard/leaves"
           className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaCalendarAlt />
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to="/Admin-dashboard/salary/add"
           className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/Admin-dashboard/settings"
          className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          end
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
