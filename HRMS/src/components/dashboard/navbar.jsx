import { useAuth } from "../../Context/authcontext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center h-14 px-6 bg-[#0F172A] text-[#F1F5F9] shadow-md">
      <p className="text-lg font-medium">Welcome, {user?.name || "User"}</p>

      <button
        className="px-6 py-2 bg-[#134D56FF] hover:bg-[#0ea5e9] text-white rounded-md transition duration-300"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
