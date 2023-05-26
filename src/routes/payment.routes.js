import { Router } from "express";
import {
  cancelPayment,
  captureOrder,
  createOrder,
} from "../controllers/payment.controllers.js";
const router = Router();

router.post("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-order", cancelPayment);

export default router;
//
