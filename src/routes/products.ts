import { Router } from "express";
import { productsController } from "../controllers/productsController";
import verifyToken from '../middlewares/verifyJWT';

const productsRouter = Router();

productsRouter.get("/products", verifyToken, productsController.getProducts);
productsRouter.get("/products/:id", verifyToken, productsController.getProductByid);

export default productsRouter;
