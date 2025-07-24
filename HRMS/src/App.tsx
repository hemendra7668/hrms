import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSummary from "./components/dashboard/adminSummary";
import AddDepartment from "./components/departments/Adddepartment";
import DepartmentList from "./components/departments/DepartmentList";
import EditDepartment from "./components/departments/Editdepartment";
import List from "./components/Employee/List";
import AdminDash from "./pages/AdminDash";
import EmployeeDash from "./pages/EmployeeDash.tsx";
import Home from "./pages/home";
import Login from "./pages/login";
import PrivateRoute from "./utils/Privateroute";
import RolebasedRoute from "./utils/rolebaseroute";

import Add from "./components/Employee/add";
import EditEmployee from "./components/Employee/Edit";
import View from "./components/Employee/View";
import AddSalary from "./components/salary/Addsalary.tsx";
import ViewSalary from "./components/salary/ViewSalary.tsx";
import RegistrationForm from "./pages/Register.tsx";
import SummaryCard from "./components/EmployeeDashboard/Summary.tsx";
import LeaveList from "./components/leave/list.tsx";
import AddLeave from "./components/leave/AddLeave.tsx";

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
              path="/Admin-dashboard/salary/add"
              element={<AddSalary />}
            ></Route>
          </Route>
          <Route path="/Employee-dashboard" element=
          {
            <PrivateRoute>
<RolebasedRoute requiredrole={["admin","employee"]}>

              <EmployeeDash />
</RolebasedRoute>
            </PrivateRoute>

          } >
  <Route index element={<SummaryCard />}></Route>
 <Route path="/Employee-dashboard/profile/:id"      element={<View />} ></Route>
 <Route path="/Employee-dashboard/leaves"      element={<LeaveList/>} ></Route>
 <Route path="/Employee-dashboard/add-leave"      element={<AddLeave/>} ></Route>
 <Route path="/Employee-dashboard/salary/:id"      element={<ViewSalary/>} ></Route>
            
          </Route>
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
