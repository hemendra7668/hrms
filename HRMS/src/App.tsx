
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminDash from "./pages/AdminDash";
import Login from "./pages/login";
import Home from "./pages/home";
import EmployeeDash from "./components/Employee/EmployeeDash";
import PrivateRoute from "./utils/Privateroute";
import RolebasedRoute from "./utils/rolebaseroute";
import AdminSummary from "./components/dashboard/adminSummary";
import DepartmentList from "./components/departments/DepartmentList";
import AddDepartment from "./components/departments/Adddepartment";
import EditDepartment from "./components/departments/Editdepartment";
import List from "./components/Employee/List";

import Add from "./components/Employee/add";
import View from "./components/Employee/View";
import EditEmployee from "./components/Employee/Edit";
import AddSalary from "./components/salary/Addsalary.tsx";
import ViewSalary from "./components/salary/ViewSalary.tsx";
import RegistrationForm from "./pages/Register.tsx";

// import { Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin-dashboard" element={
           <PrivateRoute>
            <RolebasedRoute requiredrole={["admin"]}>
             <AdminDash />
             </RolebasedRoute>
           </PrivateRoute>
            } >
<Route index element={<AdminSummary/>}></Route>
<Route path="/Admin-dashboard/departments" element={<DepartmentList/>}></Route>
<Route path="/Admin-dashboard/add-department" element={<AddDepartment/>}></Route>
<Route path="/Admin-dashboard/department/:id" element={<EditDepartment/>}></Route>
<Route path="/Admin-dashboard/employees" element={<List/>}></Route>
<Route path="/Admin-dashboard/add-employee" element={<Add/>}></Route>
<Route path="/Admin-dashboard/employees/:id" element={<View/>}></Route>
<Route path="/Admin-dashboard/employees/edit/:id" element={<EditEmployee/>}></Route>
<Route path="/Admin-dashboard/add-salary/:id" element={<AddSalary/>}></Route>
<Route path="/Admin-dashboard/employees/salary/:id" element={<ViewSalary/>}></Route>
<Route path="/Admin-dashboard/salary/add" element={<AddSalary/>}></Route>

            </Route>
          <Route path="/Employee-dashboard" element={<EmployeeDash />} />
          <Route path="./register" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
