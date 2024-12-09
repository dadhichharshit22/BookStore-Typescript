import express, { Application, Router } from 'express';
import { getAllBooks, addBook, getById, updateBook, deleteBook } from '../controllers/booksController';

// Explicitly type the router as Router
const app:Application = express()
const router: Router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.get('/:id',getById);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

export default router;

