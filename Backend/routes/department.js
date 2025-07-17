import express from 'express';
import { addDepartment } from '../controller/departmentController';
import authmiddleware from '../middleware/authmiddleware';

const router = express.Router();
router.post('/add', authmiddleware, addDepartment)

export default router;