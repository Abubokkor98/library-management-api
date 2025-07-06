import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoutes = Router();

bookRoutes.get("/books", bookController.getAllBook);
bookRoutes.post("/books", bookController.createBook);
bookRoutes.get("/books/:bookId", bookController.getBookById);
bookRoutes.patch("/books/:bookId", bookController.updateBook);
bookRoutes.delete("/books/:bookId", bookController.deleteBook);

export default bookRoutes;
