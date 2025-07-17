import Department from "../models/department.js";

const addDepartment = async(req, res)=>{
try {
    const {dep_name, description}=req.body;
    const newdepart = new Department(
        {
           dep_name,
           description 
        }
    )
    await newdepart.save();
    return res.status(200).json({
        success:true,
        message:"the department is created",
        department: newdepart 
    })
} catch (error) {
    return res.status(500).json({success:false, err: "server department error"})
}
}
export {addDepartment};