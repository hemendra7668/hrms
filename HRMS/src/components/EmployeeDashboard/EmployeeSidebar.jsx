import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "../../Context/authcontext";

const EmployeeSidebar = () => {
  const { user } = useAuth();

  const navItems = [
    {
      path: "/Employee-dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: `/Employee-dashboard/profile/${user._id}`,
      label: "My Profile",
      icon: <FaUser />,
    },
    {
      path: `/Employee-dashboard/leaves/${user._id}`,
      label: "Leaves",
      icon: <FaBuilding />,
    },
    {
      path: `/Employee-dashboard/salary/${user._id}`,
      label: "Salary",
      icon: <FaMoneyBillWave />,
    },
    {
      path: "/Employee-dashboard/settings",
      label: "Settings",
      icon: <FaCogs />,
    },
  ];

  return (
    <div className="bg-slate-900 text-white h-screen fixed left-0 top-0 bottom-0 w-64 shadow-lg">
      <div className="bg-gradient-to-r from-cyan-600 to-violet-500 h-16 flex items-center justify-center">
        <h3 className="text-xl font-semibold tracking-wide">
          Employee Portal
        </h3>
      </div>

      <nav className="mt-4 space-y-1 px-2">
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={label}
            to={path}
            end
            className={({ isActive }) =>
              `${isActive ? "bg-cyan-600 text-white" : "text-gray-300"} 
               hover:bg-cyan-500 hover:text-white 
               flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200`
            }
          >
            {icon}
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default EmployeeSidebar;
