import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(paymentRoutes);
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);
