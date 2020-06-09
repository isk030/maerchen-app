import User from '../../models/user'
import UserController from '../controller/user'
import express from 'express'

const router = express.Router();


router.post('/signup', UserController.user_signup);

export default router