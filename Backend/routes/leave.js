import express from 'express';
import { addLeave, getleaves } from '../controller/leaveController.js';
import authmiddleware from '../middleware/authmiddleware.js';

const router = express.Router();
router.post('/add', authmiddleware, addLeave)
// router.get('/', authmiddleware, getDepartments)
router.get('/:id', authmiddleware, getleaves)
// router.put('/:id', authmiddleware, updateDepartment)
// router.delete('/:id', authmiddleware, deleteDepartment)

export default router; 