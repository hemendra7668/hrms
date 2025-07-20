import Employee from "../models/Employee.js";
import User from "../models/user.js";
import bcrypt from 'bcrypt';
import multer from "multer";
import path from 'path';
const storage = multer.diskStorage({
    destination:(req,file, cb)=>{
cb(null, "public/uploads")
    }, 
    filename: (req, file, cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
});
 const upload = multer({storage:storage})
const AddEmployee = async(req, res)=>{
try {
    const {   
         name,
    email,
    employeeId,
    dob,
    gender,
    maritalStatus,
    designation,
    department,
    salary,
    role,
    password}=req.body;
    const user = await User.findOne({email})
    if(user)
    {
        return res.status(404).json({success:false, error:"the  user already exist in employees"});

    }
    const haspassword = await bcrypt.hash(password, 10);
    const newuser = new User(
        {
           name,
           email ,
           password:haspassword,
           role,
           profileImage: req.file ? req.file.filename :" "

        }
    )
    const saveduser = await newuser.save();
   
    const newEmployee = new Employee({
        userId:saveduser._id,
        employeeId,
        dob,
    gender,
    maritalStatus,
    designation,
    department,
    salary
    })
    await newEmployee.save();

    return res.status(200).json({
        success:true,
        message:"the employee is created"
    })
} catch (error) {
    console.log(error.message)
    return res.status(500).json({success:false, err: " employee server error"})
}
}

const getEmployees = async(req, res)=>{
    try {
      const employees = await Employee.find().populate('userId',{password:0}).populate('department');
      return res.status(200).json({success: true, employees})  
    } catch (error) {
      console.log(error);
      return res.status(500).json({success:false, err: " employee server  error"})
        
    }
}
const getEmployee = async(req, res)=>{
    const {id} = req.body;
    try {
      const employees = await Employee.find().populate('userId',{password:0}).populate('department');
      return res.status(200).json({success: true, employees})  
    } catch (error) {
      console.log(error);
      return res.status(500).json({success:false, err: " employee server  error"})
        
    }
}



export {AddEmployee , upload, getEmployees, getEmployee};