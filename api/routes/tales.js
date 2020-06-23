/**
 * Defining routes for tales of the api section
 * @module API/routes/tale
 */
import TalesController from '../controller/tales';
import express from 'express';

const router = express.Router();

router.get('/', TalesController.tales_get_all);

export default router;