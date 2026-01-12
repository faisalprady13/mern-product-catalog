import express from 'express';
import {
  getAllNotes,
  updateNote,
  createNote,
} from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);

export default router;
