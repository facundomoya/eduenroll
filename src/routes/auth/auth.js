import express from 'express';
import { authController } from '../../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', authController.login);

export default router;
