import { Router } from "express";
import { productController } from "../controllers/productController.mjs";
import { validationProduct } from "../middlewares/productValidation.mjs";

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", validationProduct, productController.createProduct);
productRouter.put("/:id", validationProduct, productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
