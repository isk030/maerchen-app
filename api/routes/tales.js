import Tale from '../../models/tale'
import TalesController from '../controller/tales'
import express from 'express'

const router = express.Router();


router.get('/', TalesController.tales_get_all);

export default router