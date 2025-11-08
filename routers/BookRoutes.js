import * as BookController from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
// bookRoutes.get('/new', BookController.fetchBooks);



export default bookRoutes;