import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSummary from "./components/dashboard/adminSummary.jsx";
import AddDepartment from "./components/departments/Adddepartment.jsx";
import DepartmentList from "./components/departments/DepartmentList.jsx";
import EditDepartment from "./components/departments/Editdepartment.jsx";
import List from "./components/Employee/List.jsx";
import AdminDash from "./pages/AdminDash.jsx";
import EmployeeDash from "./pages/EmployeeDash.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import PrivateRoute from "./utils/Privateroute.jsx";
import RolebasedRoute from "./utils/rolebaseroute.jsx";

import AdminLeaveTable from "./components/dashboard/AdminleaveTable.jsx";
import Setting from "./components/dashboard/Settings.jsx";
import Add from "./components/Employee/add.jsx";
import EditEmployee from "./components/Employee/Edit.jsx";
import View from "./components/Employee/View.jsx";
import EmployeeSetting from "./components/EmployeeDashboard/employeeSetting.jsx";
import SummaryCard from "./components/EmployeeDashboard/Summary.jsx";
import AddLeave from "./components/leave/AddLeave.jsx";
import LeaveDetail from "./components/leave/LeaveDetail.jsx";
import LeaveList from "./components/leave/list.jsx";
import AddSalary from "./components/salary/Addsalary.jsx";
import ViewSalary from "./components/salary/ViewSalary.jsx";
import RegistrationForm from "./pages/Register.jsx";

// import { Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Admin-dashboard"
            element={
              <PrivateRoute>
                <RolebasedRoute requiredrole={["admin"]}>
                  <AdminDash />
                </RolebasedRoute>
              </PrivateRoute>
            }
          >
            <Route index element={<AdminSummary />}></Route>
            <Route
              path="/Admin-dashboard/departments"
              element={<DepartmentList />}
            ></Route>
            <Route
              path="/Admin-dashboard/add-department"
              element={<AddDepartment />}
            ></Route>
            <Route
              path="/Admin-dashboard/department/:id"
              element={<EditDepartment />}
            ></Route>
            <Route path="/Admin-dashboard/employees" element={<List />}></Route>
            <Route
              path="/Admin-dashboard/add-employee"
              element={<Add />}
            ></Route>
            <Route
              path="/Admin-dashboard/employees/:id"
              element={<View />}
            ></Route>
            <Route
              path="/Admin-dashboard/employees/edit/:id"
              element={<EditEmployee />}
            ></Route>
            <Route
              path="/Admin-dashboard/add-salary/:id"
              element={<AddSalary />}
            ></Route>
            <Route
              path="/Admin-dashboard/employees/salary/:id"
              element={<ViewSalary />}
            ></Route>
            <Route
              path="/Admin-dashboard/employees/leaves/:id"
              element={<LeaveList />}
            ></Route>
            <Route
              path="/Admin-dashboard/leaves"
              element={<AdminLeaveTable />}
            ></Route>
            <Route
              path="/Admin-dashboard/leaves/:id"
              element={<LeaveDetail />}
            ></Route>
            <Route
              path="/Admin-dashboard/salary/add"
              element={<AddSalary />}
            ></Route>
            <Route
              path="/Admin-dashboard/settings"
              element={<Setting />}
            ></Route>
          </Route>
          <Route
            path="/Employee-dashboard"
            element={
              <PrivateRoute>
                <RolebasedRoute requiredrole={["admin", "employee"]}>
                  <EmployeeDash />
                </RolebasedRoute>
              </PrivateRoute>
            }
          >
            <Route index element={<SummaryCard />}></Route>
            <Route
              path="/Employee-dashboard/profile/:id"
              element={<View />}
            ></Route>
            <Route
              path="/Employee-dashboard/leaves/:id"
              element={<LeaveList />}
            ></Route>
            <Route
              path="/Employee-dashboard/add-leave"
              element={<AddLeave />}
            ></Route>
            <Route
              path="/Employee-dashboard/salary/:id"
              element={<ViewSalary />}
            ></Route>
            <Route
              path="/Employee-dashboard/settings"
              element={<EmployeeSetting />}
            ></Route>
          </Route>
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
