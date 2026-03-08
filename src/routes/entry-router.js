import express from 'express';
import {body} from 'express-validator';
import {
  deleteEntry,
  getEntries,
  getExercises,
  getEntryById,
  postEntry,
  postExerciseEntry,
} from '../controllers/entry-controller.js';
import {authenticateToken} from '../middlewares/authentication.js';
import {validationErrorHandler} from '../middlewares/error-handlers.js';

const entryRouter = express.Router();

entryRouter.route('/').get(authenticateToken, getEntries).post(
  authenticateToken,
  // TODO: add validators here
  body(),
  validationErrorHandler,
  postEntry,
);

entryRouter.route('/exercises').get(authenticateToken, getEntries).post(
  authenticateToken,
  // TODO: add validators here
  body(),
  validationErrorHandler,
  postExerciseEntry
);

entryRouter.route('/stats').get(authenticateToken, getExercises);

entryRouter
  .route('/:id')
  .get(getEntryById)
  .delete(authenticateToken, deleteEntry);

export default entryRouter;
