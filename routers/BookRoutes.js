import * as BookController from '../controllers/BookController.js';
import express from "express";
import authHandler from '../middleware/authHandler.js'; 

const bookRoutes = express.Router();


bookRoutes.get('/all', BookController.fetchBooks); 

bookRoutes.use(authHandler);

bookRoutes.post('/new', BookController.createBooks);
bookRoutes.put('/edit/:bookId', BookController.editBooks);
bookRoutes.delete('/delete/:bookId', BookController.deleteBooks);

export default bookRoutes