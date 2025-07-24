import Employee from "../models/Employee.js";
import Leave from "../models/Leave.js";
const addLeave = async (req, res)=>{
    try {
        console.log("Received from frontend:", req.body);

    const {userId, leaveType, startDate, endDate, Reason}= req.body;
   const employee = await Employee.findOne({ userId })
const newleave = new Leave({
    employeeId: employee._id, leaveType,
    startDate, endDate,
     Reason 
});
console.log(newleave);

await newleave.save();
return res.status(200).json({
    success: true,
    message: "leave added"
})
} catch (error) {
         return res.status(500).json({success:false, err: " leave server  error"})
 
}
}

const getleaves = async(req, res)=>{
try {
     const {id}= req.params;
     const employee= await Employee.findOne({userId:id});
     const leaves= await Leave.find({employeeId:employee._id});
     
return res.status(200).json({success: true, leaves})  
    } catch (error) {
      console.log(error);
      return res.status(500).json({success:false, err: " leave get server  error"})
        
    }
}

export { addLeave , getleaves};


