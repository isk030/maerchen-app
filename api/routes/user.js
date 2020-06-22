import UserController from '../controller/user';
import express from 'express';
import checkAuth from '../../Service/check-auth';

const router = express.Router();


router.post('/signup', UserController.user_signup);
router.post('/login', UserController.user_login);
router.patch('/:userId', checkAuth, UserController.user_addfavs);

export default router;