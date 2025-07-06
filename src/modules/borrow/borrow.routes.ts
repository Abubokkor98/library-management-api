import { Router } from "express";
import { borrowController } from "./borrow.controller";

const BorrowRoutes = Router();

BorrowRoutes.post("/borrow", borrowController.borrowBook);
BorrowRoutes.get("/borrow", borrowController.getBorrowSummary);

export default BorrowRoutes;