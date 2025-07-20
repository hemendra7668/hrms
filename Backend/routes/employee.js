import express from 'express';
import { AddEmployee, upload, getEmployees,getEmployee} from '../controller/employeeController.js';
import authmiddleware from '../middleware/authmiddleware.js';

const router = express.Router();
router.get('/', authmiddleware, getEmployees)
router.post('/add', authmiddleware, upload.single('profileImage'), AddEmployee)

router.get('/:id', authmiddleware, getEmployee)
// router.put('/:id', authmiddleware, updateDepartment)
// router.delete('/:id', authmiddleware, deleteDepartment)

export default router;