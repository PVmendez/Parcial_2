import { Router } from "express";
import { productsController } from "../controllers/productsController";

const productsRouter = Router();

productsRouter.get("/products", productsController.getProducts);
productsRouter.get("/products/:id", productsController.getProductByid);

export default productsRouter;
