import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authcontext";

const EmployeeSetting = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [setting, setsetting] = useState({
    userId: user._id,
    newpassword: "",
    oldpassword: "",
    confirmpassword: "",
  });
  const [error, seterror] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setsetting((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setting.newpassword !== setting.confirmpassword) {
      seterror("Passwords do not match.");
      return;
    }
console.log(user);

    try {
      const response = await axios.put(
        "https://hrms-backend-6624.onrender.com/setting/change-password",
        setting,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        seterror("");
        navigate("/Employee-dashboard");
      } else {
        seterror(response.data.error || "Password update failed.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        seterror(error.response.data.error);
        alert(error.response.data.error);
      } else {
        seterror("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Change Password
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Current Password</label>
          <input
            type="password"
            name="oldpassword"
            className="w-full border px-3 py-2 rounded"
            value={setting.oldpassword}
            onChange={handlechange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            name="newpassword"
            className="w-full border px-3 py-2 rounded"
            value={setting.newpassword}
            onChange={handlechange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Confirm New Password</label>
          <input
            type="password"
            name="confirmpassword"
            className="w-full border px-3 py-2 rounded"
            value={setting.confirmpassword}
            onChange={handlechange}
            required
          />
        </div>

        {error && <div className="text-red-500 mb-2">{error}</div>}

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default EmployeeSetting;
