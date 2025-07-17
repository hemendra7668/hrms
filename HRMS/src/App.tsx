
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminDash from "./pages/AdminDash";
import Login from "./pages/login";
import Home from "./pages/home";
import EmployeeDash from "./pages/EmployeeDash";
import PrivateRoute from "./utils/Privateroute";
import RolebasedRoute from "./utils/rolebaseroute";
import AdminSummary from "./components/dashboard/adminSummary";
import DepartmentList from "./components/departments/Deaprtments";
import AddDepartment from "./components/departments/Adddepartment";
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
<Route index element={<AdminSummary/>}></Route>
            </Route>
          <Route path="/Employee-dashboard" element={<EmployeeDash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
