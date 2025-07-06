import { Router } from "express";
import bookRoutes from "../modules/book/book.routes";
import BorrowRoutes from "../modules/borrow/borrow.routes";

const routes = Router();

routes.use("/api", bookRoutes);
routes.use("/api", BorrowRoutes);


export default routes;