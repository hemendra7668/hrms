import { Link } from "react-router-dom";

const DepartmentList = () =>{
    return (
        <>
       <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Departments</h3></div>
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Search By Dept. Name" id=""  className="px-4 py-0.5  border"/>
                <Link to="/admin-dashboard/add-department" className="px-4 py-0.1 bg-teal-500 rounded text-white  ">Add New Department</Link>
                </div>  
        </div>
        </>
    );
}
export default DepartmentList;